(function () {
    //var url = ""; APIとか使うときに
    var msg;
    var key;
    var botui = new BotUI('search-repo');
    var langArray = new Array('java','javascript','ruby','rubyonrails','python','php','c','objective-c','c++','swift','c#','sql','kotlin','go','cobol','curl','elixir','fortran','jsx','perl','r','rust','scala','help');

    botui.message.bot({
    //    photo: './images/avatar3.png',
        content: 'こんにちは！'
    }).then(init); //初期メッセージ

    function init() {
        botui.message.bot({
            delay: 1800,
        //    photo: './images/avatar2.png',
            content: '知りたいと思うプログラミング言語を教えてください！'
        }).then(function () {
            botui.message.bot({
                delay: 1000,
            //    photo: './images/avatar1.png',
                content: '入力は半角英数、小文字でお願いします。'
            });
        }).then(function () {
            return botui.action.text({ //returnはユーザーの入力待ち
                delay: 1000,
                action: {
                    placeholder: '例：javascript'
                }
            });
        }).then(function (res) {
            key = res.value; //入力されたキーワードを取得
            getMessage(key);

/*            botui.message.bot({
                loading: true
            }).then(function (index) {
                msg = index;
            });*/
        });
    }

    function getMessage(keyword) {
        switch (keyword) {
            case langArray[0]:
                var answer = 'JavaはバックエンドやAndroidアプリに使用されてるよ！HadoopやYahoo、Facebookにも使われてるね！';
                showMessage(answer);
                break;
            case langArray[1]:
                var answer = 'JavaScriptはフロントエンドに必要な言語だよ！すべてのブラウザと相性がよく、フレームワークもいっぱいあるよ！';
                showMessage(answer);
                break;
            case langArray[2]:
                var answer = 'Rubyは日本人が開発したオブジェクト指向スクリプト言語だよ！HuluやSlideshareはバックエンド開発にRubyを使用しているよ！';
                showMessage(answer);
                break;
            case langArray[3]:
                var answer = 'Ruby on Railsはプログラミングの快適性を追求したフルスタックフレームワークだよ！';
                showMessage(answer);
                break;
            case langArray[4]:
                var answer = 'PythonはデスクトップアプリやWebアプリに使用されてるよ！データマイニングに最適だし、GoogleやYoutube、Instagramはこの言語で構築されてるよ！';
                showMessage(answer);
                break;
            case langArray[5]:
                var answer = 'PHPはサーバー側スクリプト言語だよ！初心者向けの言語と言われるだけあって何をするか形になりやすいし、Web向けに特化されてるから、多くのサイトはPHPで構築されてるよ！';
                showMessage(answer);
                break;
            case langArray[6]:
                var answer = 'Cはシステムソフトウェアの共通言語として使用されてるよ。C言語を基にして作られた言語もあるくらい重要な言語だよ！';
                showMessage(answer);
                break;
            case langArray[7]:
                var answer = 'Objective-CはC言語を基にした言語だよ。静的だけど動的型付けもできちゃうんだ。';
                showMessage(answer);
                break;
            case langArray[8]:
                var answer = 'C++はC言語を基にした言語だよ。ゲームやモバイルアプリと色々使われてるし、AmazonやChromeはこの言語で構築されてるよ！';
                showMessage(answer);
                break;
            case langArray[9]:
                var answer = 'SwiftはiOS開発向けの言語だよ。Objective-Cと互換性を持っているよ！';
                showMessage(answer);
                break;
            case langArray[10]:
                var answer = 'C#は主にマイクロソフトの開発に使われてるよ！最近だとiOSやAndroid向けのモバイルアプリにも使用できるようになったよ！';
                showMessage(answer);
                break;
            case langArray[11]:
                var answer = 'SQLはデータベースとコミュニケーションを行う問い合わせ用の言語だよ！';
                showMessage(answer);
                break;
            case langArray[12]:
                var answer = 'KotlinはAndroidアプリ開発に使用されている言語だよ！Javaと互換性があってJavaと比べると40%のコード桁数が削減される現代的な言語仕様もあるよ！';
                showMessage(answer);
                break;
            case langArray[13]:
                var answer = 'Goは2009年Googleが発表したオープンソース言語だよ。シンプルな仕様だから学習が簡単で、高速コンパイルができるから大規模開発にも向いてるよ！';
                showMessage(answer);
                break;
            case langArray[14]:
                var answer = 'COBOLは1959年に事務処理用に開発された言語だよ。COmmon Business Oriented Languageから来てるんだって！';
                showMessage(answer);
                break;
            case langArray[15]:
                var answer = 'Curlはリッチクライアントアプリケーションに強い言語だよ！';
                showMessage(answer);
                break;
            case langArray[16]:
                var answer = 'ElixirはErlangの仮想マシン上で動作する言語だよ！分散システム、耐障害性などの機能を使えるよ！';
                showMessage(answer);
                break;
            case langArray[17]:
                var answer = 'FORTRANは1954年に開発された世界最初の高級言語だよ！';
                showMessage(answer);
                break;
            case langArray[18]:
                var answer = 'JSXはDeNAが開発した言語だよ。Webアプリケーション向けでJavaScriptのデメリットを解消することを目的として作られたんだって！';
                showMessage(answer);
                break;
            case langArray[19]:
                var answer = 'Perlは実用性と多様性を重視した言語だよ。C言語やsed、シェルスクリプトなど優れた機能を取り入れてるんだって！';
                showMessage(answer);
                break;
            case langArray[20]:
                var answer = 'Rは統計解析向けの言語だよ！ベクトル処理と呼ばれる実行機構によって柔軟処理を簡便な記法で実現してるそうだよ。';
                showMessage(answer);
                break;
            case langArray[21]:
                var answer = 'RustはC++に代わるシステムプログラミングに適した言語を目指している言語だよ！';
                showMessage(answer);
                break;
            case langArray[22]:
                var answer = 'Scalaはオブジェクト指向言語と関数型言語の特徴を統合したマルチパラダイムの言語だよ。';
                showMessage(answer);
                break;
            case langArray[23]:
                var answer = '覚えている言語は';
                showMessage(answer);
                break;    
            default:
                var answer = 'そのような言語はない、または僕が覚えてない言語かも・・・。';
                showMessage(answer);
                break;
        }
    }
    function showMessage(answer) {
        botui.message.bot({
            delay: 1200,
        //    photo: './images/avatar4.png',
            content: answer
        }).then(function () {
            return botui.message.bot({
            delay: 1200,
        //    photo: './images/avatar1.png',
            content: 'まだ知りたい言語はあるかい？'
        })
        }).then(function(){
            return botui.action.button({ //ボタンを表示
                delay: 1000,
                action: [{
                    icon: 'circle-thin',
                    text: 'はい',
                    value: true
                },{
                    icon: 'close',
                    text: 'いいえ',
                    value: false
                }]
            });
        }).then(function (res) {
            res.value ? init() : end();
        });
    }

    function end(){
        botui.message.bot({
            delay: 1000,
        //    photo: './images/avatar3.png',
            content: '今日はありがとう！またね！'
        })
    }
})();