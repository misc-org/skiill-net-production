<script lang="ts">
    import { goto } from "$app/navigation";
    import { PathId } from "$lib/model/constants";
    import { isLoading } from "$lib/model/store";
    import Button, { Label } from "@smui/button";
    import Dialog, { Actions, Content, Title } from "@smui/dialog";
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
        Separator,
    } from "@smui/list";

    const runTransition = (path: PathId) => {
        isShowSitemap = false;
        isLoading.set(true);
        void goto(path);
    };

    export let isShowSitemap = false;
</script>

<div class="dialog-container">
    <Dialog bind:open={isShowSitemap} fullscreen>
        <Title><div class="title">サイトマップ</div></Title>
        <Content>
            <div class="sitemap-container">
                <div class="item jump-list">
                    <List>
                        <Item on:SMUI:action={() => (isShowSitemap = false)}>
                            <Graphic class="material-icons">home</Graphic>
                            <Text>トップページ</Text>
                            <Meta class="material-icons">arrow_forward</Meta>
                        </Item>
                        <Separator />
                        <Item
                            on:SMUI:action={() =>
                                runTransition(PathId.ARTICLES_TOP)}
                        >
                            <Graphic class="material-icons">description</Graphic
                            >
                            <Text>アーティクル</Text>
                            <Meta class="material-icons">arrow_forward</Meta>
                        </Item>

                        <Item wrapper>
                            <List class="sub-list">
                                <Item
                                    on:SMUI:action={() =>
                                        runTransition(
                                            PathId.ARTICLES_INTRODUCTION,
                                        )}
                                >
                                    <Graphic class="material-icons"
                                        >rocket_launch</Graphic
                                    >
                                    <Text>序論</Text>
                                    <Meta class="material-icons"
                                        >arrow_forward</Meta
                                    >
                                </Item>
                                <Separator />

                                <Item
                                    on:SMUI:action={() =>
                                        runTransition(PathId.ARTICLES_METHOD)}
                                >
                                    <Graphic class="material-icons"
                                        >layers</Graphic
                                    >
                                    <Text>研究方法</Text>
                                    <Meta class="material-icons"
                                        >arrow_forward</Meta
                                    >
                                </Item>
                                <Separator />

                                <Item
                                    on:SMUI:action={() =>
                                        runTransition(PathId.ARTICLES_RESULT)}
                                >
                                    <Graphic class="material-icons"
                                        >archive</Graphic
                                    >
                                    <Text>結果</Text>
                                    <Meta class="material-icons"
                                        >arrow_forward</Meta
                                    >
                                </Item>
                                <Separator />
                                <Item
                                    on:SMUI:action={() =>
                                        runTransition(
                                            PathId.ARTICLES_CONSIDERATION,
                                        )}
                                >
                                    <Graphic class="material-icons"
                                        >category</Graphic
                                    >
                                    <Text>考察</Text>
                                    <Meta class="material-icons"
                                        >arrow_forward</Meta
                                    >
                                </Item>
                                <Separator />

                                <Item
                                    on:SMUI:action={() =>
                                        runTransition(
                                            PathId.ARTICLES_CONCLUSION,
                                        )}
                                >
                                    <Graphic class="material-icons"
                                        >auto_awesome</Graphic
                                    >
                                    <Text>結論</Text>
                                    <Meta class="material-icons"
                                        >arrow_forward</Meta
                                    >
                                </Item>
                            </List>
                        </Item>
                    </List>
                </div>
            </div>
        </Content>
        <Actions>
            <Button on:click={() => (isShowSitemap = false)}>
                <Label>閉じる</Label>
            </Button>
        </Actions>
    </Dialog>
</div>

<style lang="scss">
    .dialog-container {
        .title {
            font-size: 40px;
            font-weight: 800;
            padding: 10px 50px;
        }

        .sitemap-container {
            padding: 20px;
            * :global(.sub-list) {
                padding-top: 0px;
                padding-left: 20px;
            }
        }
    }
</style>
