<script lang="ts">
    import * as animateScroll from "svelte-scrollto";
    import { isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import Fab, { Icon } from "@smui/fab";
    import Introduction from "./_introduction.svelte";
    import Method from "./_method.svelte";
    import Result from "./_result.svelte";
    import Consideration from "./_consideration.svelte";
    import Conclusion from "./_conclusion.svelte";
    import { wait } from "$lib/model/constants";

    export let showOnPx = 150;
    let hidden = true;

    const params = location.hash;

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) return;

        hidden = !(scrollContainer().scrollTop > showOnPx);
    }

    onMount(async () => {
        if (params !== "") {
            animateScroll.scrollToTop();
            await wait(250);
            animateScroll.scrollTo({ element: params, offset: -80 });
        }
        isLoading.set(false);
    });
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="wide_title">
    <h3>校内でのスキル共有ネットワークの制作</h3>
</div>
<div class="main">
    <div id="introduction">
        <Introduction />
    </div>
    <div id="method">
        <Method />
    </div>
    <div id="result">
        <Result />
    </div>
    <div id="consideration">
        <Consideration />
    </div>
    <div id="conclusion">
        <Conclusion />
    </div>
    <div class="back-to-top fab-container" class:hidden>
        <Fab color="primary" on:click={animateScroll.scrollToTop}>
            <Icon class="material-icons">arrow_upward</Icon>
        </Fab>
    </div>
</div>

<style lang="scss">
    @use "./articles.scss";

    .main {
        padding: 0 100px;
        max-width: 1400px;
        margin: 0 auto;

        @media screen and (max-width: 860px) {
            padding: 0 20px;
        }
    }

    .back-to-top {
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 20px;
        user-select: none;
        bottom: 20px;
    }

    .back-to-top.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>
