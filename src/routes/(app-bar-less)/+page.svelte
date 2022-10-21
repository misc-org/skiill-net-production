<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import Button, { Icon, Label } from "@smui/button";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="top-view">
    <div class="top-content">
        <div class="text-container">
            <div class="center-title">
                <p> 校内でのスキルネットワークの制作 </p>
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
    <h2>概要</h2>
    <div class="grid reverse">
        <div class="item article">
            <p>
                “総合的な探究の時間” の実施がされている
                今,異なる個性を持つ者同士でスキルを発揮するため,
                自分にはないスキルを持った仲間を探すことのできるサイトの制作を行った.
                校内での求人の投稿と管理を行うために,
                SvelteフレームワークとFirebaseを使って, webアプリを制作した.
                DXの向上やDB構造の工夫により実装を完了できたが,
                アカウント登録とセキュリティについて課題が残った.
            </p>
        </div>
        <div class="item image"> わああ </div>
    </div>
    <p>ホームかも</p>
    <Button variant="raised">
        <Label>ステータスを取得</Label>
    </Button>
</div>

<style lang="scss">
    .top-view {
        position: relative;
        height: 93vh;
        align-items: center;
        justify-content: center;
        margin: 30px;
        border-radius: 20px;
        background-color: var(--m3-inverse-primary);

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
        h2 {
            font-weight: 800;
            font-size: 40px;
            text-align: left;
            padding-left: 30px;
            line-height: 0;
        }
        .grid {
            display: grid;
            // gap: 10px;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            @media screen and (max-width: 400px) {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }

            &.reverse {
                @media screen and (max-width: 860px) {
                    .item.rule-text {
                        order: 2;
                    }
                    .item.rule-img {
                        order: 1;
                    }
                }
            }
        }
        .item {
            // padding: 15px;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            &.article {
                margin: 20px;
            }
        }
    }
</style>
