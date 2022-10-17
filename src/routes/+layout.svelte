<script lang="ts">
    import type TopAppBarComponentDev from "@smui/top-app-bar";
    import Button, { Label } from "@smui/button";
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
    import type { PageData } from "./$types";

    export let data: PageData;

    let isLandscapeSnap = false;
    let topAppBar: TopAppBarComponentDev;
    let hasAppMounted = false;

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
                <Title><strong>校内でのスキルネットワークの制作</strong></Title>
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
        <div class="drawer-container">
            <Drawer
                variant="modal"
                bind:open={$isDrawerOpened}
                style="padding: 10px;"
                fixed={isLandscapeSnap}
            >
                <Header>
                    <DrawerTitle><strong>スキールネット</strong></DrawerTitle>
                    <Subtitle>スキルネットワークの制作</Subtitle>
                </Header>
                {#if isLandscapeSnap}
                    <div class="progress">
                        {#if $isLoading}
                            <LinearProgress
                                class="progress-bar"
                                indeterminate
                            />
                        {/if}
                    </div>
                {/if}

                <Content>
                    <List>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.HOME)}
                            activated={$currentPath === PathId.HOME}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >home</Graphic
                            >
                            <Text>ホーム</Text>
                        </Item>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.GUIDE)}
                            activated={$currentPath === PathId.GUIDE}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >emoji_people</Graphic
                            >
                            <Text>案内</Text>
                        </Item>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.ACCOUNT)}
                            activated={$currentPath === PathId.ACCOUNT}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >badge</Graphic
                            >
                            <Text>アカウント</Text>
                        </Item>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.OTHERS)}
                            activated={$currentPath === PathId.OTHERS}
                        >
                            <Graphic
                                class="material-icons-outlined"
                                aria-hidden="true">info</Graphic
                            >
                            <Text>その他</Text>
                        </Item>
                    </List>
                </Content>
            </Drawer>

            {#if !isLandscapeSnap}
                <Scrim fixed={false} />
            {/if}
            <AppContent class="app-content">
                <PageTransition {data}>
                    <slot />
                </PageTransition>
            </AppContent>
        </div>
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
    @media screen and (max-width: 700px) {
        :global(.app-content) {
            overflow-y: visible;
            overflow-x: hidden;
        }
    }

    @media (max-width: 599px) {
        :global(.mdc-drawer),
        :global(.mdc-drawer-scrim) {
            height: calc(100vh - 56px);
            height: calc(100dvh - 56px);
        }

        .drawer-container {
            position: relative;
            display: flex;
            height: calc(100vh - 56px);
            height: calc(100dvh - 56px);
        }
    }
    @media (min-width: 599px) {
        :global(.mdc-drawer),
        :global(.mdc-drawer-scrim) {
            height: calc(100vh - 64px);
            height: calc(100dvh - 64px);
        }

        .drawer-container {
            position: relative;
            display: flex;
            height: calc(100vh - 64px);
            height: calc(100dvh - 64px);
        }
    }

    .progress {
        padding-top: 8px;
        min-height: 4px;
    }
    .progress-mobile {
        margin-top: -5.5px;
        min-height: 4px;
    }
</style>
