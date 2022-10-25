<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import Button, { Icon, Label } from "@smui/button";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <h3>校内でのスキルネットワークの制作</h3>
</div>
<div class="main">
    <div class="introduction">
        <div class="title"><p>| 序論</p></div>
        <div class="grid reverse">
            <div class="item article">
                <p>
                    文部科学省は, 2022年度から全国の高校で
                    “総合的な探究の時間”を実施している。 “総合的な探究” は,
                    “探究的な学習” と “協働的な学習”
                    で構成されている.　“協働的な学習” とは,
                    他者と協同して課題を解決しようとする学習活動であり,
                    そこで重要なのは,
                    異なる個性をもつ者同士で問題の解決に向かうことである.　また,
                    それぞれのスキルを最大限に活かして活動することも重要である.　これらの点からまず,
                    自ら仲間を探し, 共に探究を進めることにした.　そこで私たちは,
                    問題の解決を円滑に進めるために人との繋がりが鍵になると考え,
                    ネットワークを使って個人のスキルを共有することで,
                    チームを組みやすくできないかと考えた.　自ら学びながら仲間が相互に教え合い,
                    さまざまなことに取り組むスタイルは,
                    私たちが考える新しい学習方法だと考え,
                    自分にはないスキルを持った仲間を探すためのサイトを作っていく.
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
        <div class="methods">
            <div class="title"><p>| 研究方法</p></div>
            <div class="grid reverse">
                <div class="item article">
                    <p>
                        序論にて,
                        校内でのスキル共有サイトを制作する意義について述べた.　ここでは,
                        スキル共有ネットワークとサイトの制作方法を明らかにするために,
                        ツールの選定を行い, 実際に実装を行った. 　はじめに,
                        このネットワークとサイトの制作に実装に必要な機能を考え,
                        以下のように決定した：
                        １．誰でも簡単にアクセスできるようにする.
                        ２．求人を共有できるシステムを作る.
                        ３．アカウントシステムを構築し, 自分で
                        　　投稿した求人を管理できるようにする.
                        ４．他の高校でもカスタマイズできるよう
                        　　拡張性を高める. 以上の要求機能を満たすため,
                        次に挙げるツールを使い,
                        スキル共有ネットワークとサイトを制作した.
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
            <div class="grid">
                <div class="item image">
                    <img
                        src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                        height="200"
                        alt=""
                    />
                </div>
                <div class="item article">
                    <p>
                        使用したツールは以下のように選定した.
                        誰でも簡単にアクセスできるようにするためには,
                        OSによる依存を無くす観点から, webアプリをベースにし,
                        システムを構築した.　また, 実装する機能が多いことや,
                        UIデザインを考慮する必要あった.　さらに,
                        スキルの投稿/管理だけの簡単な構造であったため,
                        プロジェクトは中規模と判断し,
                        JavaScriptフレームワークは,
                        SvelteとSveltekitを使うことを決めた. 　Svelteとは,
                        単一ファイルコンポーネント(SFC) のファイル構成
                        (JavaScriptとHTML, CSSを１つのファイルに書く形式) で,
                        宣言的なUIを記述できるパフォーマンスに優れたフレームワークである.　Svelteの主な特徴は,
                        １．Write less code : 少ない記述量 ２．No virtual DOM :
                        仮想DOMでない ３．Truly reactive : リアクティブステート
                        の３つである.　その他, TypeScript, HTML, CSS, SCSS, JSON
                        などの言語を用いて制作した. 　またUIコンポーネントには,
                        SMUI (Svelte Material UI) を使用し, GoogleのMaterial
                        3に準じた色と配色を用いることで,
                        統一感のあるデザインに仕上げることができた. [図１]
                    </p>
                </div>
            </div>
            <div class="grid reverse">
                <div class="item article">
                    <p>
                        また, 求人データの投稿と管理,
                        アカウンとシステムの実装は,
                        BaaSであるGoogleのFirebaseを用い,
                        SDKをwebアプリへバンドルした.
                        　求人データ投稿にはFirebase FireStoreを,
                        アカウントシステムには, OAuthに準拠したFirebase
                        Authenticationを使用し,
                        安全にデータの管理とアカウントシステムを構築することができた.　また,
                        Firebaseの設定をJSONに書き出すことで,
                        学校によって容易にカスタマイズすることができ,
                        拡張性が高まったといえる.
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
            <div class="grid">
                <div class="item image">
                    <img
                        src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                        height="200"
                        alt=""
                    />
                </div>
                <div class="item article">
                    <p>
                        では,
                        どのようにシステムを開発していくのかを次のように示す.　フロントエンドについては前述の通り,
                        Svelte, TypeScript, HTML, CSS, SCSS,
                        JSONを使って開発を行う.　また,
                        GitHubにソースコードを管理するレポジトリを置いておき,
                        必要に応じてコミットをする.　そうすると,
                        プロジェクトルートから見て .github/workflows/main.yml
                        に記述されたワークフローがGitHub
                        Actionsに対してトリガーされ,
                        仮想PCでソースコードのビルドが次のような手順で行われる
                        [図３] ：
                    </p>
                </div>
            </div>
            <div class="grid reverse">
                <div class="item article">
                    <p>
                        具体的には, 次の手順でデプロイされる：
                        １．node.jsがインストールされた
                        　　Ubuntuインスタンスの準備を行う２．package.json
                        に記述された依存関係を 　　インストールする (npm
                        install) ３．SCSSに記述されたスタイルシートを
                        　　CSSへコンパイルする ４．npm run build により,
                        Svelteの 　　コンパイラが, ソースコードを
                        　　vanillaなJavaScriptへコンパイルする ５．SSR
                        (サーバーサイドレンダリング)
                        　　を行うためのプリレンダリングが 　　行われる
                        (環境変数もバンドルされる) ６．repository secret
                        に登録されている 　　Vercelのdeploy tokenを使って,
                        　　ビルドされた成果物をVercelへ 　　デプロイする
                        このようにして, 差分をコミットしてから平均２分程度で,
                        自動的にデプロイされることで,
                        効率的な開発を可能にした.　この開発手法を, Continuous
                        Integration/Delivery (CI/CD) という. 　また,
                        GitHubにはコミットされない環境変数には,
                        Firebaseの操作に必要なクライアントIDや書き込むための文字列を含んでいる.　これらの設定は,
                        ローカルでの開発やデプロイするのに必要だがインターネット上に流出すると,
                        第三者に悪用される可能性があるので,
                        gitの追跡対象外に登録しなければならない： $ echo
                        ".env.local" >> .gitignore
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
            <div class="grid">
                <div class="item image">
                    <img
                        src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                        height="200"
                        alt=""
                    />
                </div>
                <div class="item article">
                    <p>
                        ここまで, システム開発の全体を確認した. では次に,
                        求人データを保存するデータベースの構築を行う.　FireStoreは,
                        NoSQL方式のデータベースであり,
                        一般的なSQLとは設計が異なる.　それを踏まえて必要な仕様に合わせてカラムと型を考え,
                        図４のようなDB設計となった.　ただし型に ?
                        が付いているのは, nullable (null許容) という意味である.
                    </p>
                </div>
            </div>
        </div>
        <div class="result">
            <div class="title"><p>| 結果</p></div>
            <div class="grid reverse">
                <div class="item article">
                    <p>
                        以上の開発フローや, システム構成を選定し,
                        その通り実装を行った結果,
                        図５のようなサイトの制作ができた. 右下の “+ 求人を作成 ”
                        FAB をタップすることで, 求人データを入力でき,
                        データを送信すると, 求人が登録され,
                        どのサイトでも見れるようになった.　サイトのアクセシビリティを向上するために目に優しいダークモードも対応できた.
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
        <div class="consideration">
            <div class="title"><p>| 考察</p></div>
            <div class="grid reverse">
                <div class="item article">
                    <p>
                        前ページの結果より,
                        要求された機能は全て実装することができた.　ただ,
                        Qiitaなどのユーザー投稿型のサイトと機能を比べると,
                        まだ実装や作り込みの足りない部分があると考えた.
                        　今回制作した“スキールネット” と ユーザー投稿型サイト
                        Qiita のアカウント登録画面の比較を図６に示す：
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
            <div class="grid">
                <div class="item image">
                    <img
                        src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                        height="200"
                        alt=""
                    />
                </div>
                <div class="item article">
                    <p>
                        図６から, Qiitaのアカウント登録画面には, ユーザー名,
                        メールアドレスとパスワードの 一般的な登録以外にも,
                        GitHubやTwitterなどの多くのソーシャルサービスの紐づけに対応している.　一方
                        “スキールネット”には,
                        Googleアカウントのみの連携しか現状できない.　学校での生徒の利用に問題は無くとも,
                        先生が利用したり,
                        Googleアカウントを持っていないユーザーを考えると,
                        アカウント登録に必要なデータの種類の選択肢は多いに越したことはない.
                        　また, メールアドレスとパスワードの組み合わせでは,
                        スパムなどが大量に登録できてしまい,
                        サービスの安定性に問題が出るので,
                        自動ボットなどのアカウント登録を排除する必要がある.　その点もQiitaでは,
                        reCAPTCHAをバンドルすることで,
                        ユーザーが人間であることを証明でき,
                        しっかりと対策されていると考えることができる.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="conclusions">
        <div class="title"><p>| 結論</p></div>
        <div class="grid reverse">
            <div class="item article">
                <p>
                    この研究によって, JavaScriptフレームワークであるSvelteと,
                    その他TypeScriptなどの言語を使い,
                    バックエンドをFirebaseで実装することで, “スキールネット”
                    を制作でき,
                    スキル共有ネットワークとサイトの制作方法を明らかにすることができた.　しかし,
                    同じようなサービスを提供している他のサイトと比べてユーザーの機能が足りていないことから,
                    アカウントの登録やセキュリティの視点からももっと“スキールネット”の改良が必要だ.
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
    }
</style>
