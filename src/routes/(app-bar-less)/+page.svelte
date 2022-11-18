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
    import _ from "lodash";
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton from "@smui/icon-button";
    import Sitemap from "./_sitemap.svelte";
    import { Style } from "$lib/model/inline-style";
    import { base } from "$app/paths";

    const charaName = _.sample(["manta", "orca", "turtle", "whale"]);

    let isShowSitemap = false;

    onMount(() => {
        isLoading.set(false);
    });
</script>

<Sitemap {isShowSitemap} />

<div class="top-view">
    <div class="top-content">
        <div class="sitemap">
            <Button
                on:click={() => {
                    isShowSitemap = false;
                    isShowSitemap = true;
                }}
                variant="text"
            >
                <Icon class="material-icons-outlined">account_tree</Icon>
                <Label><strong>サイトマップ</strong></Label>
            </Button>
        </div>
        <div class="text-container">
            <div class="center-title">
                <p> 校内でのスキル共有ネットワークの制作 </p>
            </div>
            <div class="subtitle">
                <p>メンバー: 町田 渉, 占部 颯, 稗田 花林 </p>
            </div>
        </div>
        <div class="img-container">
            <img src={`${base}/img/articles/chara/${charaName}.png`} alt={charaName} />
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
                    自分にはないスキルを持った仲間を探すことのできるサイトの制作を行った．
                    校内での求人の投稿と管理を行うために,
                    SvelteフレームワークとFirebaseを使って,
                    webアプリを制作した．
                    <br />
                    &nbsp;&nbsp;&nbsp;その結果, DXの向上やDB構造の工夫により実装を完了できたが,
                    アカウント登録とセキュリティについて課題が残った.
                </p>
            </div>
        </div>
    </div>
    <div class="index">
        <div class="title">
            <p>目次</p>
        </div>
        <div class="navigator">
            <Button
                on:click={() => runTransition(PathId.ARTICLES_TOP)}
                variant="raised"
            >
                <Label>はじめから読む</Label>
                <Icon class="material-icons">arrow_forward</Icon>
            </Button>
        </div>
        <div class="item jump-list">
            <List>
                <Item
                    on:SMUI:action={() =>
                        runTransition(PathId.ARTICLES_INTRODUCTION)}
                >
                    <Graphic class="material-icons">rocket_launch</Graphic>
                    <Text>序論</Text>
                    <Meta class="material-icons">arrow_forward</Meta>
                </Item>
                <Separator />

                <Item
                    on:SMUI:action={() => runTransition(PathId.ARTICLES_METHOD)}
                >
                    <Graphic class="material-icons">layers</Graphic>
                    <Text>研究方法</Text>
                    <Meta class="material-icons">arrow_forward</Meta>
                </Item>
                <Separator />

                <Item
                    on:SMUI:action={() => runTransition(PathId.ARTICLES_RESULT)}
                >
                    <Graphic class="material-icons">archive</Graphic>
                    <Text>結果</Text>
                    <Meta class="material-icons">arrow_forward</Meta>
                </Item>
                <Separator />
                <Item
                    on:SMUI:action={() =>
                        runTransition(PathId.ARTICLES_CONSIDERATION)}
                >
                    <Graphic class="material-icons">category</Graphic>
                    <Text>考察</Text>
                    <Meta class="material-icons">arrow_forward</Meta>
                </Item>
                <Separator />

                <Item
                    on:SMUI:action={() =>
                        runTransition(PathId.ARTICLES_CONCLUSION)}
                >
                    <Graphic class="material-icons">auto_awesome</Graphic>
                    <Text>結論</Text>
                    <Meta class="material-icons">arrow_forward</Meta>
                </Item>
            </List>
        </div>
    </div>
    <div class="members">
        <div class="title"><p>| メンバー</p></div>
        <div class="list">
            <List class="member-list" twoLine avatarList singleSelection>
                <Item>
                    <Graphic
                        style="
                        background-image: url(https://avatars.githubusercontent.com/u/86721991?v=4);
                        background-size: contain;
                        "
                    />
                    <Text>
                        <PrimaryText>町田 渉</PrimaryText>
                        <SecondaryText
                            >webアプリの開発, レポートサイトの制作</SecondaryText
                        >
                    </Text>
                </Item>
                <Item>
                    <Graphic
                        style="
                    background-image: url(https://avatars.githubusercontent.com/u/108719784?v=4);
                    background-size: contain;
                    "
                    />
                    <Text>
                        <PrimaryText>占部 颯</PrimaryText>
                        <SecondaryText>webアプリの配色デザイン</SecondaryText>
                    </Text>
                </Item>
                <Item>
                    <Graphic
                        style="
                    background-image: url(https://avatars.githubusercontent.com/u/108717711?v=4);
                    background-size: contain;
                    "
                    />
                    <Text>
                        <PrimaryText>稗田 花林</PrimaryText>
                        <SecondaryText
                            >webアプリ, レポートサイトでの挿絵</SecondaryText
                        >
                    </Text>
                </Item>
            </List>
        </div>
    </div>
    <div class="space" style="height: 50px;" />
</div>

<style lang="scss">
    @use "../(app-bar)/articles/articles.scss";

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

            .sitemap {
                position: absolute;
                top: 3%;
                right: 3%;

                @media screen and (max-width: 860px) {
                    top: 2%;
                    right: 3%;
                }
            }

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

                @keyframes fuwafuwa {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                img {
                    height: 150px;
                    animation: 3s fuwafuwa infinite;
                }
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
                p {
                    font-size: large;
                    line-height: 30px;
                }
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
                width: 50%;
                margin: 0 auto;
                padding-top: 20px;
                @media screen and (max-width: 860px) {
                    padding: 0px;
                    width: 90%;
                }
            }
        }

        .members {
            text-align: left;
            padding-bottom: 20px;
            .title {
                padding-bottom: 30px;
            }
            .list {
                width: 70%;
                pointer-events: none;
                margin: 0 auto;
                padding: 20px;
                background-color: var(--m3-tertiary-container);
                border: 0.2px solid var(--m3-on-surface-variant);
                border-radius: 10px;

                @media screen and (max-width: 860px) {
                    width: 90%;
                }
            }
            .grid {
                grid-template-columns: repeat(auto-fit, minmax(400px, 0.3fr));
                @media screen and (max-width: 400px) {
                    grid-template-columns: repeat(
                        auto-fit,
                        minmax(300px, 0.3fr)
                    );
                }
            }
        }
    }
</style>
