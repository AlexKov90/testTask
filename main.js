// Test 2
// function multi() {
//     for (let i = 1; i <= 99; i++) {
//         if (i % 3 === 0 && i % 7 === 0) {
//             console.log("OpenSource");
//         } else if (i % 7 === 0) {
//             console.log("Source");
//         } else if (i % 3 === 0) {
//             console.log("Open");
//         } else {
//             console.log(i);
//         }
//     }
// };
// multi();

// Test 3
// const child = document.getElementsByClassName("container")[0].children;
// console.log(child);

// Test 4
// function sum(arrStr) {
//     let count = 0;
//     for (let i = 0; i < arrStr.length; i++) {
//         const num = Number(arrStr[i]);
//         if (num && num % 1 === 0) {
//             count += num;
//         }
//     }
//     return count;
// }
// const arr = ['1', '2', 'b', '12.3', '25'];
// const result = sum(arr);

// Test 5
// const link = "https://jsonplaceholder.typicode.com/posts";
// async function getObject() {
//     const answer = await fetch(link);
//     const answerJSON = await answer.json();
//     const response = answerJSON.find((obj) => obj.id === 5);
//     return response;
// };
// console.log(await getObject());

// Test 6
// const regExp = /(?=.*Softeq)(?=.*\#rules).*/g;

// Test 7
// function getAlphArray() {
//     const arr = [];
//     for (let i = 65; i <= 90; i++) {
//         arr.push(String.fromCharCode(i));
//     }
//     return arr;
// };
// console.log(getAlphArray());