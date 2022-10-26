<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import Introduction from "./_introduction.svelte";
    import Method from "./_method.svelte";
    import Result from "./_result.svelte";
    import Consideration from "./_consideration.svelte";
    import Conclusion from "./_conclusion.svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <h3>校内でのスキルネットワークの制作</h3>
</div>
<div class="main">
    <Introduction />
    <Method />
    <Result />
    <Consideration />
    <Conclusion />
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
</style>
