<script lang="ts">
    import { Style } from "$lib/model/inline-style";
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    import _ from "lodash";

    let charaOpened = _.fill(Array(4), false);
</script>

<div class="methods">
    <div class="title"><p>| 研究方法</p></div>
    <div class="grid reverse">
        <div class="item image">
            <img src="img/articles/02.png" alt="" />
        </div>
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;序論にて,
                校内でのスキル共有サイトを制作する意義について述べた．ここでは,
                スキル共有ネットワークとサイトの制作方法を明らかにするために,
                ツールの選定を行い, 実際に実装を行った．はじめに,
                このネットワークとサイトの制作に実装に必要な機能を考え,
                以下のように決定した：
            </p>
            <ol>
                <li>誰でも簡単にアクセスできるようにする.</li>
                <li>求人を共有できるシステムを作る.</li>
                <li
                    >アカウントシステムを構築し,
                    自分で投稿した求人を管理できるようにする.</li
                >
                <li>他の高校でもカスタマイズできるよう拡張性を高める.</li>
            </ol>
            <p>
                以上の要求機能を満たすため, 次に挙げるツールを使い,
                スキル共有ネットワークとサイトを制作した.
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;使用したツールは以下のように選定した.
                誰でも簡単にアクセスできるようにするためには,
                OSによる依存を無くす観点から, webアプリをベースにし,
                システムを構築した．また, 実装する機能が多いことや,
                UIデザインを考慮する必要あった.
            </p>
        </div>
    </div>
    <div class="grid">
        <div class="item image">
            <img src="img/articles/03.png" alt="" />
        </div>
        <div class="item article">
            <p>
                さらに, スキルの投稿/管理だけの簡単な構造であったため,
                プロジェクトは中規模と判断し, JavaScriptフレームワークは,
                SvelteとSveltekitを使うことを決めた. Svelteとは,
                単一ファイルコンポーネント(SFC) のファイル構成
                (JavaScriptとHTML, CSSを１つのファイルに書く形式) で,
                宣言的なUIを記述できるパフォーマンスに優れたフレームワークである．Svelteの主な特徴は,
            </p>
            <ul>
                <li>Write less code : 少ない記述量</li>
                <li>No virtual DOM : 仮想DOMでない</li>
                <li>Truly reactive : リアクティブステート</li>
            </ul>
            <p>
                の３つである．その他, TypeScript, HTML, CSS, SCSS, JSON
                などの言語を用いて制作した．またUIコンポーネントには, SMUI
                (Svelte Material UI) を使用し, GoogleのMaterial
                3に準じた色と配色を用いることで,
                統一感のあるデザインに仕上げることができた.
            </p>
        </div>
    </div>

    <div class="grid reverse">
        <div class="item image">
            <img src="img/articles/04.png" alt="" />
        </div>

        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;スキールネットは人と人との繋がりを推進していく新しいwebアプリなので,
                IT企業のような爽やかな青色をメインカラーとして配色した.また,
                ドミナントカラー配色によって統一感を持たせることにした. まず,
                青色をメインとした3色を考えるために, 色見本を使用した.
                <br />
                &nbsp;&nbsp;&nbsp;メニューバーはwebサイトの軸の部分なので, 最も明度が低く,
                彩度が高い重みのある印象の色を選択した. 次に見出しは, 白文字と対比させるために,
                明度と彩度のバランスがよい色を選択した.最後にスワイプメニューは,
                文字を見やすくさせるため, 明度が高く中彩度の色を選択し, 軽い印象を持たせた.
                <br />
                &nbsp;&nbsp;&nbsp;以下が ”スキールネット” のロゴができるまでの遷移である.
            </p>
        </div>
    </div>

    <div class="card-container">
        <div class="card">
            <img src="img/articles/logo/1.png" alt="" />
            <p>オリジナル</p>
        </div>
        <div class="arrow material-icons">arrow_forward</div>
        <div class="card">
            <img src="img/articles/logo/2.png" alt="" />
            <p>
                角を丸くすることで柔らかさを出し, IT企業に多い水色することで,
                爽やかさがでた.
            </p>
        </div>
        <div class="arrow material-icons">arrow_forward</div>
        <div class="card">
            <img src="img/articles/logo/3.png" alt="" />
            <p>
                スキールネットが人と人とをつなぐネットワークであるという意味をこめて時計の代わりにネットワークのロゴを貼り付けた.
            </p>
        </div>
        <div class="arrow material-icons">arrow_forward</div>
        <div class="card">
            <img src="img/articles/logo/4.png" alt="" />
            <p>
                ネットワークのロゴが複雑すぎるのでスキールネットが人と人とを繋ぐ電波の役割をするという意味で電波の形にしシンプルにまとめた.
            </p>
        </div>
    </div>

    <div class="grid">
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;webサイトのキャラクターデザインを考えるにあたり重要であることは何かまたwebサイト以外でのキャラクターデザインとの違いを考察した．
                <br />
                &nbsp;&nbsp;&nbsp;まず, 重要であることはコンセプトのわかりやすさとなじみやすさであると考えられる．
                また, webサイト以外でのキャラクターデザインとの違いに関わる点においては,
                サイトの内容を邪魔しないようなキャラクターであることが重要となってくる．
                しかし, キャラクターはサイトを閲覧する人にとって一番印象に残る部分であるためインパクトを残すような物であることが必要になってくる．
                <br />
                &nbsp;&nbsp;&nbsp;これらの点を考慮し, 今回のサイトでは「海」をテーマにキャラクターを制作した.
                コンセプトのわかりやすさの点において, 今回サイト全体の配色とキャラクターのデザインの担当が異なるため全体の配色を見た青色から海というイメージを考案した．
                わかりやすさの点においては, 海から考えるイメージとして生物が最もわかりやすいと考えた．
                しかし, 魚という括りで考えると種類など一目で伝わりにくいことが多いと考えられる．
                <br />
                &nbsp;&nbsp;&nbsp;そこで, くじらやかめなど誰もが一度は目や耳にしたことのある,
                一目で伝わる生物をテーマにキャラクターを考案することにした．インパクトという点においては,
                色の塗り方で表現した． ステンドグラスのような色の塗り方にすることによりサイト自体の邪魔をすることなくインパクトを与えられると考えた．
                また, 色の変更が簡単に行えるため配色の関係などで修正を入れる場合も素早く対応ができる点からこの色の塗り方を選択した．
                &nbsp;&nbsp;&nbsp;これらの点を考慮し, 作成を進めるため簡易的なキャラクターデザインシートを使用してから作業を開始した．
            </p>
        </div>
    </div>
    <div class="chara-container">
        <div class="chara c0">
            <Accordion>
                <Panel bind:open={charaOpened[0]}>
                    <Header>
                        <img src="img/articles/chara/whale.png" alt="" /><br />
                        <div class="chara-title">くじら</div>
                        <IconButton slot="icon" toggle pressed={charaOpened[0]}>
                            <Icon class="material-icons" on>expand_less</Icon>
                            <Icon class="material-icons">expand_more</Icon>
                        </IconButton>
                    </Header>
                    <Content>The content for panel 0.</Content>
                </Panel>
            </Accordion>
        </div>
        <div class="divider material-icons">sailing</div>
        <div class="chara c1">
            <Accordion>
                <Panel bind:open={charaOpened[1]}>
                    <Header>
                        <img src="img/articles/chara/turtle.png" alt="" /><br />
                        <div class="chara-title">かめ</div>
                        <IconButton slot="icon" toggle pressed={charaOpened[1]}>
                            <Icon class="material-icons" on>expand_less</Icon>
                            <Icon class="material-icons">expand_more</Icon>
                        </IconButton>
                    </Header>
                    <Content>The content for panel 1.</Content>
                </Panel>
            </Accordion>
        </div>
        <div class="divider material-icons">sailing</div>
        <div class="chara c2">
            <Accordion>
                <Panel bind:open={charaOpened[2]}>
                    <Header>
                        <img src="img/articles/chara/orca.png" alt="" /><br />
                        <div class="chara-title">シャチ</div>
                        <IconButton slot="icon" toggle pressed={charaOpened[2]}>
                            <Icon class="material-icons" on>expand_less</Icon>
                            <Icon class="material-icons">expand_more</Icon>
                        </IconButton>
                    </Header>
                    <Content>The content for panel 2.</Content>
                </Panel>
            </Accordion>
        </div>
        <div class="divider material-icons">sailing</div>
        <div class="chara c3">
            <Accordion>
                <Panel bind:open={charaOpened[3]}>
                    <Header>
                        <img src="img/articles/chara/manta.png" alt="" /><br />
                        <div class="chara-title">マンタ</div>
                        <IconButton slot="icon" toggle pressed={charaOpened[3]}>
                            <Icon class="material-icons" on>expand_less</Icon>
                            <Icon class="material-icons">expand_more</Icon>
                        </IconButton>
                    </Header>
                    <Content>The content for panel 3.</Content>
                </Panel>
            </Accordion>
        </div>
    </div>

    <div class="grid reverse">
        <div class="item image">
            <img src="img/articles/05.png" alt="" />
        </div>
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;また, 求人データの投稿と管理,
                アカウンとシステムの実装は, BaaSであるGoogleのFirebaseを用い,
                SDKをwebアプリへバンドルした．求人データ投稿にはFirebase
                FireStoreを, アカウントシステムには, OAuthに準拠したFirebase
                Authenticationを使用し,
                安全にデータの管理とアカウントシステムを構築することができた．また,
                Firebaseの設定をJSONに書き出すことで,
                学校によって容易にカスタマイズすることができ,
                拡張性が高まったといえる.
            </p>
        </div>
    </div>
    <div class="grid ">
        <div class="item image">
            <img src="img/articles/06.png" alt="" />
            <p> ↑ ”スキールネット” の データベース </p>
        </div>
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;では,
                どのようにシステムを開発していくのかを次のように示す．フロントエンドについては前述の通り,
                Svelte, TypeScript, HTML, CSS, SCSS,
                JSONを使って開発を行う．また,
                GitHubにソースコードを管理するレポジトリを置いておき,
                必要に応じてコミットをする．そうすると,
                プロジェクトルートから見て <tt>.github/workflows/main.yml</tt>
                に記述されたワークフローがGitHub Actionsに対してトリガーされ, 仮想PCでソースコードのビルドが行われる.
            </p>
            <p>
                差分をコミットしてから平均２分程度で,
                自動的にデプロイされることで,
                効率的な開発を可能にした．この開発手法を, Continuous
                Integration/Delivery (CI/CD) という．また,
                GitHubにはコミットされない環境変数には,
                Firebaseの操作に必要なクライアントIDや書き込むための文字列を含んでいる．これらの設定は,
                ローカルでの開発やデプロイするのに必要だがインターネット上に流出すると,
                第三者に悪用される可能性があるので,
                gitの追跡対象外に登録しなければならない:<br />
                <tt>$ echo ".env.local" >> .gitignore</tt>
            </p>
        </div>
    </div>
    <div class="grid reverse">
        <div class="item image">
            <img src="img/articles/07.png" alt="" />
            <p> ↑ ”スキールネット” の データベース </p>
        </div>
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;ここまで, システム開発の全体を確認した.
                では次に,
                求人データを保存するデータベースの構築を行う．FireStoreは,
                NoSQL方式のデータベースであり,
                一般的なSQLとは設計が異なる．それを踏まえて必要な仕様に合わせてカラムと型を考え,
                図４のようなDB設計となった．ただし型に ? が付いているのは,
                Nullable (null許容) という意味である.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    @use "./articles.scss";

    .card-container {
        display: flex;
        overflow-x: auto;
        padding: 20px 0;
        transform: scale(1, -1);
        -webkit-overflow-scrolling: touch;

        .card {
            transform: scale(1, -1);
            padding: 20px;
            min-width: 250px;
            max-width: 250px;
            background-color: var(--m3-inverse-primary);
            border-radius: 20px;
            img {
                border-radius: 20px;
                height: 150px;
            }
        }

        .arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
            font-size: 30px;
        }
        &::-webkit-scrollbar {
            height: 12px; /* スクロールバーの高さ */
        }
        &::-webkit-scrollbar-track {
            background: var(--m3-inverse-primary); /* トラックの色 */
            border-radius: 7px; /* トラック両端の丸み */
        }
        &::-webkit-scrollbar-thumb {
            background: var(--m3-primary); /* ツマミの色 */
            border-radius: 7px; /* ツマミ両端の丸み */
        }
    }
    .chara-container {
        display: flex;
        overflow-x: auto;
        padding: 20px 0;
        transform: scale(1, -1);

        @keyframes fuwafuwa {
            0%,
            100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        .chara {
            transform: scale(1, -1);
            padding: 20px;
            min-width: 350px;
            max-width: 350px;
            // background-color: var(--m3-inverse-primary);
            border-radius: 20px;

            .chara-title {
                font-size: 25px;
                font-weight: 800;
                color: var(--m3-primary);
            }
            img {
                min-height: 300px;
                border-radius: 20px;
                width: 300px;
            }
        }
        .chara:nth-child(1) img {
            animation: 3s fuwafuwa infinite;
        }
        .chara:nth-child(3) img {
            animation: 3.1s fuwafuwa infinite;
        }
        .chara:nth-child(5) img {
            animation: 2.9s fuwafuwa infinite;
        }
        .chara:nth-child(7) img {
            animation: 3.2s fuwafuwa infinite;
        }

        .divider {
            transform: scale(1, -1);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
            font-size: 30px;
        }
        &::-webkit-scrollbar {
            height: 12px; /* スクロールバーの高さ */
        }
        &::-webkit-scrollbar-track {
            background: var(--m3-inverse-primary); /* トラックの色 */
            border-radius: 7px; /* トラック両端の丸み */
        }
        &::-webkit-scrollbar-thumb {
            background: var(--m3-primary); /* ツマミの色 */
            border-radius: 7px; /* ツマミ両端の丸み */
        }
    }

    tt {
        background-color: var(--m3-outline);
        border-radius: 5px;
        color: var(--m3-background);
        padding: 3px;
    }
</style>
