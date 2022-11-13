<div class="consideration">
    <div class="title"><p>| 考察</p></div>
    <div class="grid reverse">
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;前ページの結果より,
                要求された機能は全て実装することができた.　ただ,
                Qiitaなどのユーザー投稿型のサイトと機能を比べると,
                まだ実装や作り込みの足りない部分があると考えた.
                　今回制作した“スキールネット” と ユーザー投稿型サイト Qiita
                のアカウント登録画面の比較を図６に示す：
            </p>
        </div>
        <div class="item image">
            <img
                src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                alt=""
            />
        </div>
    </div>
    <div class="grid">
        <div class="item image">
            <img
                src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/60f95161b382b3c00f3b3057_80_cat_box_ol.png"
                alt=""
            />
        </div>
        <div class="item article">
            <p>
                &nbsp;&nbsp;&nbsp;図６から, Qiitaのアカウント登録画面には,
                ユーザー名, メールアドレスとパスワードの 一般的な登録以外にも,
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

<style lang="scss">
    @use "./articles.scss";
</style>
