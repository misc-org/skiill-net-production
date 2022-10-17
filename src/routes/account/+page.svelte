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
    <h3>アカウント！</h3>
</div>
<div class="main">
    <p>アカウントかも～</p>
</div>

<style>
    .main {
        padding: 16px;
        text-align: center;
    }
</style>
