<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import Button, { Icon, Label } from "@smui/button";
    import { onMount } from "svelte";
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
        Separator,
    } from "@smui/list";
    import { PathId, runTransition } from "$lib/model/constants";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="top-view">
    <div class="top-content">
        <div class="text-container">
            <div class="center-title">
                <p> 校内でのスキル共有ネットワークの制作 </p>
            </div>
            <div class="subtitle">
                <p>メンバー: 町田 渉, 占部 颯, 稗田 花林 </p>
            </div>
        </div>
        <div class="img-container">
            <img
                src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                height="200"
                alt=""
            />
        </div>
    </div>
</div>
<div class="main">
    <div class="abstract">
        <div class="title"><p>| 概要</p></div>
        <div class="grid reverse">
            <div class="item article">
                <p>
                    &nbsp;&nbsp;&nbsp;“総合的な探究の時間” の実施がされている
                    今,異なる個性を持つ者同士でスキルを発揮するため,
                    自分にはないスキルを持った仲間を探すことのできるサイトの制作を行った.
                    校内での求人の投稿と管理を行うために,
                    SvelteフレームワークとFirebaseを使って, webアプリを制作した.
                    DXの向上やDB構造の工夫により実装を完了できたが,
                    アカウント登録とセキュリティについて課題が残った.
                </p>
            </div>
            <div class="item image">
                <img
                    src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                    height="200"
                    alt=""
                />
            </div>
        </div>
    </div>
    <div class="index">
        <div class="title">
            <p>目次</p>
        </div>
        <div class="navigator">
            <Button
                on:click={() => runTransition(PathId.ARTICLES)}
                variant="raised"
            >
                <Label>はじめから読む</Label>
                <Icon class="material-icons">arrow_forward</Icon>
            </Button>
        </div>
        <div class="grid">
            <div class="item jump-list">
                <List>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">rocket_launch</Graphic>
                        <Text>導入</Text>
                        <Meta class="material-icons">info</Meta>
                    </Item>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">send</Graphic>
                        <Text>研究方法</Text>
                    </Item>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">archive</Graphic>
                        <Text>結果・結論</Text>
                    </Item>
                    <Separator />
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">clear</Graphic>
                        <Text>Delete</Text>
                    </Item>
                </List>
            </div>
            <div class="item jump-list">
                <List>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">rocket_launch</Graphic>
                        <Text>導入</Text>
                        <Meta class="material-icons">arrow_forward</Meta>
                    </Item>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">send</Graphic>
                        <Text>Send</Text>
                        <Meta class="material-icons">arrow_forward</Meta>
                    </Item>
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">archive</Graphic>
                        <Text>Archive</Text>
                        <Meta class="material-icons">arrow_forward</Meta>
                    </Item>
                    <Separator />
                    <Item on:SMUI:action={() => null}>
                        <Graphic class="material-icons">clear</Graphic>
                        <Text>Delete</Text>
                        <Meta class="material-icons">arrow_forward</Meta>
                    </Item>
                </List>
            </div>
        </div>
    </div>
    <div class="members">
        <div class="title"><p>概要</p></div>
        <div class="grid reverse">
            <div class="item article">
                <p>
                    &nbsp;&nbsp;&nbsp;“総合的な探究の時間” の実施がされている今,
                    異なる個性を持つ者同士でスキルを発揮するため,
                    自分にはないスキルを持った仲間を探すことのできるサイトの制作を行った.
                    校内での求人の投稿と管理を行うために,
                    SvelteフレームワークとFirebaseを使って, webアプリを制作した.
                    DXの向上やDB構造の工夫により実装を完了できたが,
                    アカウント登録とセキュリティについて課題が残った.
                </p>
            </div>
            <div class="item image">
                <img
                    src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                    height="200"
                    alt=""
                />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    // common component
    .title {
        p {
            font-weight: 800;
            padding: 20px 0 0 10px;
            margin-bottom: 18px;
            margin-left: -12px;
            font-size: 35px;
            text-align: left;
            line-height: 0;
        }
    }

    .top-view {
        position: relative;
        height: 93vh;
        align-items: center;
        justify-content: center;
        margin: 30px;
        border-radius: 20px;
        background-color: var(--m3-inverse-primary);

        @media screen and (max-width: 860px) {
            margin: 0px;
            border-radius: 0px;
            height: 100vh;
        }

        .top-content {
            width: 100%;

            .text-container {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                transform: translate(-50%, -50%);

                .center-title {
                    p {
                        padding: 10px;
                        font-weight: 900;
                        font-size: 40px;
                        line-height: 1;
                        color: var(--m3-primary);
                    }
                }
            }

            .img-container {
                position: absolute;
                bottom: 25px;
                right: 25px;
            }
        }
    }
    .main {
        padding: 0 100px;
        max-width: 1400px;
        margin: 0 auto;

        @media screen and (max-width: 860px) {
            padding: 0 20px;
        }

        .grid {
            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            @media screen and (max-width: 400px) {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }

            .article {
                text-align: left;
            }

            &.reverse {
                @media screen and (max-width: 830px) {
                    .item.article {
                        order: 2;
                    }
                    .item.image {
                        order: 1;
                    }
                }
            }
            // .item {
            //     height: 100%;
            //     // text-align: center;
            //     // display: flex;
            //     // justify-content: center;
            //     // align-items: center;
            // }
        }

        .index {
            border: 0.2px solid var(--m3-on-surface-variant);
            background-color: var(--m3-surface-variant);
            padding: 20px;
            border-radius: 20px;
            margin-top: 20px;
            position: relative;

            .navigator {
                position: absolute;
                top: 10%;
                right: 3%;
            }

            .title {
                padding-left: 10px;
                margin-top: -10px;
            }
            .jump-list {
                padding-top: 20px;
                @media screen and (max-width: 860px) {
                    padding: 0px;
                }
            }
        }
    }
</style>
