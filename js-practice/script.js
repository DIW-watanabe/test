document.write("問1");
document.write("<br>");

for(var i = 1; i <= 5; i++){
  document.write("★");
}

document.write("<br>");
document.write("問2");
for(var star1 = 1; star1 <= 2; star1++){
  document.write("<br>");
  for(var star2 = 1; star2 <= 3; star2++){
    document.write("★");
  }
}


document.write("<br>");
document.write("問3");

for(var star1 = 1; star1 <= 2; star1++){
  document.write("<br>");
  for(var star2 = 1; star2 <= 5; star2++){
    document.write("☆");
    }
}


document.write("<br>");
document.write("問4");
document.write("<br>");


for(var star1 = 1; star1 <= 5; star1++){
  for(var star2 = 1; star2 <= 5; star2++){
    document.write("★");
  }
  document.write("<br>");
}

document.write("問5");
for(var star1 = 1; star1 <= 4; star1++){
  document.write("<br>");
  for(var star2 = 1; star2 <= 3; star2++){
    document.write("★");
  }
}

// なおし！
// ※前回のチェックの時は、forの入れ子構造の事が定着していなかった。
//行と列が表示されていることに対しての説明が出てこなかった。
document.write("<br>");
document.write("問6");
document.write("<br>");
// 外側のループを設定する。
// star1の初期値を1に設定する。
// star1が３以下の値まで１ずつ増加しながらループする。
for (var star1 = 1; star1 <= 3; star1++) {
  // 変数lineを宣言し初期値としてからの文字列が代入されている。
  // 空の文字列を設定する理由：後でこの変数にテキストを追加していくことができる。
  let line = "";
  // 内側のループを設定する
  // 変数Jに初期値0を設定する　ｊは５未満までｊに設定した初期値に１足しながらループする。
  for ( let j = 0; j < 3; j++){
    // もし、ｊを２で割った時に余りが0であれば、
    if(j % 2 === 0) {
      // 最初に設定した空の文字列に★を代入する。+=は左の値に右の値を代入する。
      line += "★";
      // そうでないなら、同じく最初に設定した空の文字列に☆を代入する。
    } else {
      line += "☆";
    }
  }
  // html画面上に文字列lineを表示する。
  document.write(line);
  document.write("<br>");
}

// +=は代入ではなくて、接合！！！値の接合！！
// 上記で何が起きているかというと、文字列lineにからの文字列配列を設定してるから
// 空の箱←ガッチャンコ“★”
// だから結果として★のみが表示されている。☆の場合も同様。
// document.write(line)に何が入っているかというと★☆★☆★☆この一列全部が入っている理由は、外側のfor文の外に出ているから。
// 今回は+=で接合にしてしまったから、書き方としてはここにdocument.write("line");だけど、
// 代入（＝）にするんだったら、内側のfor文のループの中に入れる感じになる。
// そうすると、当初想像していた、★が一つずつ、都度表示される感じになる。
// 代入のパターンは下記に記載する。


// 今回注意されたこと。
// リーダブルコードが甘すぎるよー！ってこと。
// 優秀なエンジニアの人は、きれいなコードを当たり前に見ているから、審査の段階でもきたねえな…ってきになるらしい。
// 採用担当者がコードを見た時も、きれいに書くっていうのが定着してない。一緒にやるうえで配慮がないとか、共通意識的な部分で、マイナスに感じるらしい。
//基本規則の定着は必須。コードを書くたびにチェックするように。


document.write("lineに代入を使用して出力したパターン");
document.write("<br>");
for (var i = 0; i < 3; i++) {
    line = ""

    for (var j = 0; j < 3; j++) {

      if (j % 2 === 0){
      line = "★";
    } else {
      line = "☆";
    }
  document.write(line);
  }
  document.write("<br>");
}




// document.write("<br>");
// document.write("問6");

// for (var star1 = 1; star1 <= 3; star1++) {
//   let line = "";

//   for (let j = 0; j < 5; j++) {
//     if (j % 2 === 0) {
//       line += "★";
//     } else {
//       line += "☆";
//     }
//   }

//   document.write(line);
// }



// document.write("<br>");
// document.write("問7");
// for(var star1 = 1; star1 <=4; star1++){
//   document.write("<br>");
//   for(var star2 = 1; star2 <=1; star2++){
//     document.write("★");
//   }
//   for(var star3 = 1; star3 <=1; star3++){
//     document.write("☆");
//   }
//     for(var star4 = 1; star4 <=1; star4++){
//     document.write("★");
//   }
//     for(var star5 = 1; star5 <=1; star5++){
//     document.write("☆");
//   }
//     for(var star6 = 1; star6 <=1; star6++){
//     document.write("★");
//   }
// }

document.write("<br>");
document.write("問７");
document.write("<br>");
// 初期値iに0を設定する
// 外枠の増減式。行に表示する項目の個数の指定。０～４
// iは４以下まで１ずつ増加しながら、増減式を繰り返す。
for(var i = 0; i <= 3; i++){
  // lineに空の文字列を定義
  let line = "";
  // 内側の増減式。列の指定。行に表示する項目の個数の指定。
  // jに初期値０を設定する。ｊは値を１ずつ増加させながら５未満になるまでループする。
  for(var j = 0; j < 5; j++){
    // もしjを２で割った時、余りが０であれば
    // （今回はデータ型も同じの場合とした）
    if(j % 2 === 0){
      // 文字列lineに★を代入する
      // +=は右の値を左の値に代入する
      line += "★"
      // それ以外の場合は
    } else {
      // 空の変数lineに☆を代入する
      line += "☆"
    }
    // html画面に変数lineを表示する
  }
  document.write(line);
  document.write("<br>");
}

document.write("代入を使用した出力パターン できた！");
document.write("<br>");

for(var i = 0; i < 4; i++){

  let line = "";

  for(var j = 0; j < 5; j++){
    if(j % 2 === 0){
      line = "★";
    } else {
      line = "☆";
    }
    document.write(line);
  }
  document.write("<br>");
}




document.write("<br>");
document.write("問8");
document.write("<br>");
// 行数の指定
for (let i = 1; i <= 5; i++) {
  // ローカル変数　★を格納するためのからの文字列
    let pattern = '';
    // 変数 j を1から i まで増加させながら、
    // ★ を文字列 pattern に追加
    // i の値によって、★ の数が異なります
    for (let j = 1; j <= i; j++) {
        pattern += '★';
    }
    document.write(pattern + "<br>");
}

// document.write("<br>");
// document.write("for文を使用したプルダウンメニュー");

// for(var i =18;i<=65; i++){
//   document.write("<option>");
//   document.write(i);
//   document.write("</option>");
// }


document.write("問１円の面積を求める関数")
document.write("<br>");
// 再代入できないconstで書いてみる。
// 意図せず値を書き換えることによる
// エラーを未然に防ぐことができます。
// constとvarの置き換えは可能。


// // 円の面積を求める関数
// // 与えられた半径をもとに円の面積を計算する
// function CircleArea(radius){
//   // 円周率を定義
//   const i = 3.14;
//   // 円周率×半径×半径
//   const area = i*radius*radius;
//   // 戻り値(計算された面積を関数の呼び出しもとに返す)
//   return area;
// }

// // 半径5cmの円を計算
// // 円の半径を指定
//   const radius1 = 5;
//     // CircleArea(radius)関数を使用してradius1に入れる
//   const area1 = CircleArea(radius1);
//   document.write("半径５ｃｍの円の面積は" + area1 +"㎠");
//   document.write("<br>")


// // 半径7cmの円を計算
// // 円の半径を指定
//   const radius2 = 7;
//   // CircleArea(radius)関数を使用してradius2に入れる
//   const area2 = CircleArea(radius2);
//   document.write("半径７ｃｍの円の面積は" + area2 + "㎠");
//   document.write("<br>");


// // 半径１０ｃｍの円を計算
// // 円の半径を指定
//   const radius3 = 10;
//     // CircleArea(radius)関数を使用してradius3に入れる
//   const area3 = CircleArea(radius3);
//   document.write("半径１０ｃｍの円の面積は" + area3 + "㎠");



// //いろんな書き方１
// document.write("<br>");
// document.write("<br>");
// document.write("いろんな書き方２")
// document.write("<br>");

// function menseki(hankei,ensyuritu){
// return "面積は"+hankei*hankei*ensyuritu+" ㎠です。";
// }
// document.write(menseki(5,3.14));
// document.write("<br>");
// document.write(menseki(7,3.14));
// document.write("<br>");
// document.write(menseki(10,3.14));


//いろんな書き方３
document.write("<br>");
document.write("<br>");
document.write("いろんな書き方３")
document.write("<br>");

// 関数mensekiは単一の値radius（円の半径）を受け取ります。
function menseki(radius){
// 今回は円周率3.14は今回変わらないので、そのまま数字を式にいれた。
// 変数　areaに円の面積を出す式を指定。
  const area = 3.14 * radius * radius;
  // 結果を乗数点以下２桁に制限して返す
  return ("面積は" + area + "㎠" + "<br>");
}
// html画面上に“”で囲った部分の文字面積はと㎠を文字列として表示
// menseki1関数に異なる半径（5,7,10)を渡して、
// 計算された円の面積が表示されます。
document.write("面積は：" + menseki(5) + "㎠");
document.write( menseki(7) );
document.write( menseki(10) );


document.write("<br>");
document.write("<br>");
document.write("問２")
document.write("<br>");

// 関数TotalPriceに大人（otona）と子供（kodomo）の数を引数として渡す
function TotalPrice(otona, kodomo){
  // 変数totalに大人の人数×大人1人当たりの料金＋子供の人数×子供一人当たりの料金を計算結果が格納される
  const total = (otona * 500 + kodomo * 200);
  // 計算結果が、returnを通じて呼び出し元（下記の式のTotalPrice)に返される
  return total;
}
// 変数a,b,cには、TotalPrice関数へ異なる変数を渡して計算した結果が代入される

// それぞれの行が関数 TotalPrice を呼び出しています。
// この呼び出し元のコードの中で、関数が呼び出され、
// 関数内の処理が実行されます。
// そして、各呼び出し元で関数が return を通じて返した結果が
// 変数 a, b, c に代入されます。
const a = TotalPrice(2, 4);
const b = TotalPrice(1, 5);
const c = TotalPrice(3, 7);
// 各変数a,b,cの値（計算結果）がhtml上で表示されます。
document.write(a + "円です。<br>");
document.write(b + "円です。<br>");
document.write(c + "円です。<br>");




// document.write("<br>");
// document.write("<br>");
// document.write("合計金額は～円ですをコード上で何回も書かないで済む方法はないか")
// document.write("<br>");

// // デフォルトで大人価格と子供価格を定義
// function Totalprice(otona,kodomo,otonaPrice = 500,kodomoPrice=200){
//   const total = (otona*otonaPrice + kodomo*kodomoPrice);
//   return total;
// }
// // グループごとの情報をオブジェクトとして持つ配列groupを定義
// // クラス：設計図
// // インスタンス：実際に作った物
// // オブジェクト：モノ（クラスとかインスタンスとかをふんわりと表現したもの）
// const groups = [
//   // グループ名：name,人数：otona,kodomo
//   { name:'A', otona:2, kodomo:4},
//   { name:'B', otona:1, kodomo:5},
//   { name:'C', otona:3, kodomo:7}
//   ];


// // forループを使用してgroupの配列の各要素にアクセス
// // groupToal関数を使って、合計金額けいさん。
// for (let i =0; i< groups.length; i++){
//   // groups[i] は、配列 groups 内の特定の要素を指す。
//   const groupName = groups[i].name;
//   // i が 0 から始まり、groups.length - 1（配列の要素数から1引いた数）まで繰り返す。
//   // 0.1.2までしか使えない３はないからgroup.length-1
//   const groupTotal = TotalPrice(groups[i].otona, groups[i].kodomo);
//   document.write(groupName + "グループの合計金額は"　+ groupTotal + "円です。<br>");
// }















