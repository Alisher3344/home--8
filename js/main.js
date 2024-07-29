// // str1
// let n = 22;
// let utf = 65;
// for (let i = 1; i <= n; i++) {
//   console.log(String.fromCharCode(utf));
//   utf++;
// }

// // str2
// let a = "a";
// let x = typeof a;
// let y = a.charCodeAt(a);

// if (65 <= y <= 90 || 97 <= y <= 122) {
//   console.log("lotin");
// } else {
//   console.log(0);
// }

// // str3
// let sum = "Alisher";
// let y = sum[0];
// let x = sum[sum.length - 1];
// console.log(y.charCodeAt());
// console.log(x.charCodeAt());

// // str4
// function summa(n, l) {
//   for (let i = 1; i <= n; i++) {
//     console.log(l, String.fromCharCode(2));
//   }
// }
// summa(5, `A`);

// // str5
// let str = "Alisher";
// let y = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   y += str[i];
// }
// console.log(str);
// console.log(y);

// // str6
// function getstringStast(n) {
//   let a = "";
//   for (let i = 1; i <= n; i++) {

//   }
// }
// getstringStast(4);

// // str7
// let str = "1234";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   count++;
// }
// console.log(count);

// // str9
// let a = "ALISHER";
// console.log(a.toLocaleLowerCase());

// // str10
// function getInverseNumber(n) {
//   let sum = n;
//   let y = n.charCodeAt();
//   if (y >= 65 && y <= 90) {
//     console.log(sum.toLowerCase());
//   } else {
//     console.log(sum.toUpperCase());
//   }
// }
// getInverseNumber(`A`);

// // str12
// function getInverseNumber(n) {
//   let sum = n;
//   let y = n.charCodeAt();
//   if (y >= 65 && y <= 90) {
//     console.log(sum.toLowerCase());
//   } else {
//     console.log(sum.toUpperCase());
//   }
// }
// getInverseNumber(`A`);

// // str14
// let n1 = 3;
// let n2 = 4;
// let s1 = "aloodf;lgjfdg";
// let s2 = "fhjkshfaloo";
// let sum = "";
// let y = s1.slice(0, n1 + 1);
// let x = s2.slice(-n2);
// console.log(y.concat(x));

// str15
let c = `l`;
let s = "hollo world";
function sumew(c,s) {
  
  for (let el of s) {
    if (el == c) {
      console.log(el);
    }
  }
}
