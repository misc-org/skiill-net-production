<script lang="ts">
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import type { PageData } from ".svelte-kit/types/src/routes/$types";

    export let data: PageData;
    let animations = false;

    onMount(
        () =>
            (animations = !window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches),
    );
</script>

{#key data}
    {#if animations}
        <div
            in:fly={{ y: -5, duration: 250, delay: 300 }}
            out:fly={{ y: 5, duration: 250 }}
        >
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
{/key}
