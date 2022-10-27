<script lang="ts">
    import type TopAppBarComponentDev from "@smui/top-app-bar";
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import Drawer, {
        AppContent,
        Content,
        Title as DrawerTitle,
        Header,
        Subtitle,
        Scrim,
    } from "@smui/drawer";
    import List, { Item, Text, Graphic } from "@smui/list";
    import { currentPath, isDrawerOpened, isLoading } from "$lib/model/store";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PageTransition from "$lib/components/page-transition.svelte";
    import LinearProgress from "@smui/linear-progress";
    import Splash from "$lib/components/splash.svelte";
    import { LandScapeDetecter } from "$lib/model/landscape";
    import { PathId } from "$lib/model/constants";
    import Tab, { Label as TabLabel } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import type { PageData } from ".svelte-kit/types/src/routes/(app-bar-less)/$types";

    export let data: PageData;

    let isLandscapeSnap = false;
    let topAppBar: TopAppBarComponentDev;
    let hasAppMounted = false;

    const tabs = [
        {
            icon: "home",
            label: "導入",
        },
        {
            icon: "home",
            label: "研究方法",
        },
        {
            icon: "home",
            label: "結果/考察",
        },
    ];

    let active = tabs[0];

    onMount(async () => {
        $isDrawerOpened = LandScapeDetecter.isLandscape();
        currentPath.set(new URL(location.href).pathname);
        hasAppMounted = true;
        updateSize();

        // callback windows width event
        window.addEventListener("resize", updateSize);
    });

    function updateSize(): void {
        isLandscapeSnap = LandScapeDetecter.isLandscape();

        let path = new URL(location.href).pathname;
        if (path === "/") return;
    }

    async function runTransition(route: string) {
        $isDrawerOpened = isLandscapeSnap;
        if (route !== $currentPath && !$isLoading) {
            isLoading.set(true);
            currentPath.set(route);
            void goto(route);
        }
    }
</script>

{#if hasAppMounted}
    <TopAppBar bind:this={topAppBar} variant="fixed">
        <Row>
            <Section>
                <IconButton
                    class="material-icons"
                    on:click={() => ($isDrawerOpened = !$isDrawerOpened)}
                    >menu</IconButton
                >
                <Title
                    ><strong>校内でのスキル共有ネットワークの制作</strong
                    ></Title
                >
            </Section>
        </Row>

        {#if !isLandscapeSnap}
            <div class="progress-mobile">
                {#if $isLoading}
                    <LinearProgress class="progress-bar-mobile" indeterminate />
                {/if}
            </div>
        {/if}
    </TopAppBar>

    <AutoAdjust {topAppBar}>
        <AppContent class="app-content">
            <PageTransition {data}>
                <slot />
            </PageTransition>
        </AppContent>
    </AutoAdjust>
{:else}
    <Splash />
{/if}

<style lang="scss">
    :global(.app-content) {
        overflow-y: visible;
        height: 100%;
        width: 100%;
    }

    :global(.mdc-circular-progress__determinate-circle, .mdc-circular-progress__indeterminate-circle-graphic) {
        stroke: var(--m3-on-primary);
    }
    :global(.app-content) {
        overflow-y: visible;
        overflow-x: hidden;
    }

    .tab-container {
        background-color: var(--m3-back);
    }
    .progress {
        padding-top: 8px;
        min-height: 4px;
    }
    .progress-mobile {
        margin-top: -5.5px;
        min-height: 4px;
    }
    .tab-container {
        width: 100%;
    }
</style>
