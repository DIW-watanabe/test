<!DOCTYPE html>
  <html lang= "ja">

    <head>
        <meta charset="UTF-8">
        <title>diworksblog掲示板</title>
        <link rel= "stylesheet" type="text/css" href="index2-3.css">
        <style>
          .form-responsive {
            overflow: hidden;
          }
          input[type=text]{
            width: 100%;
            box-sizing: border-box;
          }

          textarea {
            width: 100%;
            box-sizing: border-box;
          }
        </style>
      </head>

    <body>
    <header>
      <div class="header-logo">
      <img src="diblog_logo.jpg" alt="サンプル画像">
      </div>
    <div class="header-menu-bar">
      <div class="header-menu">
        <ul>
          <li>トップ</li>
          <li>プロフィール</li>
          <li>D.I.Blogについて</li>
          <li>登録フォーム</li>
          <li>問い合わせ</li>
          <li>その他</li>
        </ul>
      </div>
    </div>
    </header>

    <main>
      <div class="main-container">
        <div class="main-sidebar">
          <h3>人気の記事</h3>
          <ul>
            <li>PHPオススメ本</li>
            <li>PHP　MyAdminの使い方</li>
            <li>いま人気のエディタTops</li>
            <li>HTMLの基礎</li>
          </ul>
          <h3>オススメリンク</h3>
          <ul>
            <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
            <li>XAMPPのダウンロード</li>
            <li>Eclipseのダウンロード</li>
            <li>Braketsのダウンロード</li>
          </ul>
          <h3>カテゴリ</h3>
          <ul>
            <li>HTML</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>JavaScript</li>
          </ul>
        </div>

          <h1>入力フォーム</h1>

          <form method="POST" action="insert.php">
              <div class="form-responsive">
                <label>ハンドルネーム</label>
                <br>
                <input type="text" class="text" size="140" name="handlename">
                <br>
              </div>

              <div class="form-responsive">
                <label>タイトル</title>
                <br>
                <input type= "text" class="text"  size= "140" name="title">
                <br>
              </div>

              <div class="form-responsive">
                <label>コメント</label>
                <br>
                <textarea rows="10" cols="142" name="comments"></textarea>
                <br>
              </div>

              <div>
                  <input type="submit" value="送信する" class="submit">
              </div>
          </form>
          <?php
            mb_internal_encoding("utf8");
            $pdo = new PDO("mysql:dbname=lesson1;host=localhost;", "root", "");
            $stmt = $pdo->query("SELECT * FROM diworks_keijiban");
            while ($row = $stmt->fetch()) {
                echo "<div class='kiji'>";
                echo "<h3 style=\"border-bottom: 1px solid black; width: 98%;\">" . $row['title'] . "</h3>";
                echo "<div class='comments' style=\"padding-top: 30px;\">";
                echo $row['comments'];
                echo "<div class='handlename' style=\"padding-top: 10px; padding-bottom:10px;\">posted by " . $row['handlename'] . "</div>";
                echo "</div>";
                echo "</div>";
            }
          ?>
        <!-- メッセージの表示 あかんいったん保留-->
        <!-- <?php
          if (isset($_SESSION['message'])) {
              echo $_SESSION['message'];
              unset($_SESSION['message']);
          }
        ?> -->
    </body>
    <footer>
      Copyright D.I.works| D.I.blog is the one which provides A to Z about programming
    </footer>
</html>

