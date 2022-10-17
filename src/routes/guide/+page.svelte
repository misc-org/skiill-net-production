<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import Button, { Label } from "@smui/button";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });

    let status = "";
</script>

<div class="wide_title">
    <h3>ガイド！</h3>
</div>
<div class="main">
    <p>ガイドかも～</p>
    <Button on:click={() => null} variant="raised">
        <Label>ステータスを取得</Label>
    </Button>
    <p>{status}</p>
</div>

<style>
</style>
