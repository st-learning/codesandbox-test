/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //  ver変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //  ver変数再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// // letは再宣言が不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数"
// console.log(val3);

// // constは上書きが不可能
// val3 = "const変数を上書き"
// console.log(val3);

// // constは再宣言が不可能
// const val3 = "const変数を再宣言"

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: '太郎',
//   age: 20,
// };
// val4.name = 'taro'
// // memo: 新しい変数も追加できる ↓
// val4.address = 'Tokyo'
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('bear');
// console.log(val5);

/**
 * テンプレート文字列
 * memo: 文字列の中にjsが埋め込める
 */
// const name = "太郎";
// const age = 20;
// // 「私の名前は太郎です。年齢は20歳です。」
// // 従来の方法
// const message1 = "「私の名前は" + name + "です。年齢は" + age + "歳です。」";
// console.log(message1);

// // テンプレート文字列を用いた方法
// // memo：　文字をくくるときは＠マークのところにある``をつかう
// const message2 = `「私の名前は${name}です。年齢は${age}歳です。」`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }

// // memo: constで書く場合↓
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // memo： 矢印の前の()は抜いても意味が通る
// // const func2 = (str) => {
// //   return str;
// // };

// // memo： returnが省略できる。↓の構文の内容は↑と同じ
// const func2 = (str) => str;
// console.log(func2("runc2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "太郎",
//   age: 20,
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// // memo: いちいちmyProfileなどの変数をいれなくていいようにする方法
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// // memo: 配列
// const myProfile = ["太郎", 20];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など(
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello('太郎');

/**
 * スプレッド構文　...
 * memo: dotを3つ並べて書く
 */
// // 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // memo: スプレッド構文を使うと参照先までは影響を受けない
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // memo: 講師ブログで解説有。arr4まで書き変わってしまうパターン。予期せぬ不具合になりやすい。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterをつかった配列の処理
 */
const nameArr = ["田中", "山田", "鈴木"];
// // memo: 従来のやり方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// // memo: 〇番めは✖です
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// // memo: mapを使うやり方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // nameArr.map((name) => console.log(name));

// nameArr.map((name, index) => console.log(`${index+1}番目は${nameArr[index]}です`));
// nameArr.map((name) => console.log(`${name}です`));

// // memo: filterをつかう
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // memo: 奇数を抽出（=数字を2で割ったときの余りが1になるもの)
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// memo: 使いすぎると可読性が下がるため使う際は的確なところで
// ある条件 ? 条件がtureの時：条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// 数字以外がきたらエラー、数字が来たら数字を出す
// const num = 24000;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数字をいれてください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
// };
// console.log(checkSum(120, 10));

/**
 * 論理演算子の本当の意味 && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// // ||は左側がfalseなら右を返す、左がtrueなら左を返すという意味
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右を返す、左がfalseなら左を返すという意味
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
