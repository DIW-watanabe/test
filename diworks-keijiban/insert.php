<?php
session_start();
mb_internal_encoding("utf8");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  try {
    $pdo= new PDO("mysql:dbname=lesson1; host=localhost;","root","");
    // DBとの接続　setAttribute()メソッドでオブジェクト属性を設定　
    // PDO::ATTER_ERRMODEでPDOのエラーモードを指定　PDO::ERRMODE_EXCEPTIONでエラーが発生すると例外処理を行う
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // データを挿入するクエリをプリペアステートメントとして準備する　VALUES(?, ?, ?)に実際の値がバインドされる
    // 『$stmt= ～』phpプリペアメソッド(phpマニュアル参照)
    $stmt= $pdo->prepare("INSERT INTO diworks_keijiban (handlename, title, comments) VALUES (?, ?, ?)");
    // POSTデータをバインドしてクエリを実行する
    $stmt->execute([$_POST['handlename'], $_POST['title'], $_POST['comments']]);
    $_SESSION['message'] = "データが正常に挿入されました";
    // PDOの拡張機能がスローする例外の一つ。データベースに関するエラーをスローする。PDOExceptionインスタンスを補足するための変数として$eを定義する
  } catch(PDOException $e) {
    // エラーが発生した場合は、エラーメッセージを表示する
    $_SESSION['message'] = "エラー：" . $e->getMessage();
  }

  header("Location: http://localhost/diworks-keijiban/index.php");
  exit;
}

?>



