<?php
// エラーハンドリングを有効にする
try {
    // データベースに接続する
    $pdo = new PDO("mysql:host=localhost;dbname=lesson1;charset=utf8", "root", "");
    // エラーモードを例外に設定する
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // データを挿入するクエリをプリペアドステートメントとして準備する
    $stmt = $pdo->prepare("INSERT INTO contactform (name, mail, age, comments) VALUES (?, ?, ?, ?)");

    // POST データを受け取り、isset() 関数でそれぞれの値がセットされているかを確認する
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $mail = isset($_POST['mail']) ? $_POST['mail'] : '';
    $age = isset($_POST['age']) ? $_POST['age'] : '';
    $comments = isset($_POST['comments']) ? $_POST['comments'] : '';

    // POSTデータをバインドしてクエリを実行する
    $stmt->execute([$_POST['name'], $_POST['mail'], $_POST['age'], $_POST['comments']]);

    echo "データが正常に挿入されました。";
} catch(PDOException $e) {
    // エラーが発生した場合は、エラーメッセージを出力する
    echo "エラー：" . $e->getMessage();
}
?>


<! doctype HTML>
<html lang="ja">
  <head>
    <meta charaset="utf-8">
    <link rel = "stylesheet" type = "text/css" href = "style2.css">
    <title>お問い合わせフォームを作る</title>
  </head>

  <body>
    <h1>お問い合わせフォーム</h1>

    <div class="confirm">
      <p>
        お問い合わせ有難うございました。<br>
        3営業日以内に担当よりご連絡差し上げます。
      </p>
      <form action = "index.html" method= "post">
        <input type = "submit" class = "button3" value = "入力画面に戻る">
      </form>
    </div>


  </body>
</html>