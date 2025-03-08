//!__________________________________________________
//! Tosh, Qaychi, Qog'oz o'yinini
//!! ikki foydalanuvchi oynaydi bu oyni

const userFirst = prompt("1-user 'tosh', 'qaychi' yoki 'qogoz'ni kiriting: ")
const userSecond = prompt("2-user 'tosh', 'qaychi' yoki 'qogoz'ni kiriting: ")
switch (true) {
  case (userFirst === 'tosh' && userSecond === 'qaychi'):
  case (userFirst === 'qaychi' && userSecond === 'qogoz'):
  case (userFirst === 'qogoz' && userSecond === 'tosh'):
    console.log("(1)the first player winner 🔥🔥🔥");
    break;
  case (userFirst === 'qaychi' && userSecond === 'tosh'):
  case (userFirst === 'qogoz' && userSecond === 'qaychi'):
  case (userFirst === 'tosh' && userSecond === 'qogoz'):
    console.log("(2)the second player winner 🔥🔥🔥");
    break;
  case (userFirst === userSecond):
    console.log("Hey Bro durrang 🤝");
    break;
  default:
    console.log("noto'g'ri: ");
}

//!__________________________________________________
//!! ikki foydalanuvchi oynaydi bu oyni

// let userFirst = prompt("1-user 'tosh', 'qaychi' yoki 'qogoz'ni kiriting: ");
// let userSecond = prompt("2-user  'tosh', 'qaychi' yoki 'qogoz'ni kiriting: ");

// if (
//   (userFirst === "tosh" && userSecond === "qaychi") ||
//   (userFirst === "qaychi" && userSecond === "qogoz") ||
//   (userFirst === "qogoz" && userSecond === "tosh")
// ) {
//   console.log("(1)the first player winner 🔥🔥🔥");
// } if(userFirst === userSecond)
//   console.log("Hey Bro durrang 🤝");
// else {
//   console.log("(2)the second player winner 🔥🔥🔥");
// }

//!__________________________________________________
//! Kabisa yilini
// const year = prompt('Yil kiriting: ');
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 100 == 0) {
//       console.log("Kabisa yili");
//     } else {
//       console.log("Kabisa yili emas");
//     }
//   } else {
//     console.log("Kabisa yili");
//   }
// } else {
//   console.log("Kabisa yili emas");
// }

//!__________________________________________________
//! Bugungi sana va vaqt
//! mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// const now = new Date();
// const day = now.getDate();
// const month = now.getMonth() + 1;
// const year = now.getFullYear();

// console.log("mm / dd / yyyy");
// console.log(
//   `${month < 10 ? '0' : ''}${month} - ${day < 10 ? '0' : ''}${day} - ${year}`
// );
// console.log(
//   `${month < 10 ? '0' : ''}${month} / ${day < 10 ? '0' : ''}${day} / ${year}`
// );
// console.log("dd / mm / yyyy");
// console.log(
//   `${day < 10 ? '0' : ''}${day} - ${month < 10 ? '0' : ''}${month} - ${year}`
// );
// console.log(
//   `${day < 10 ? '0' : ''}${day} / ${month < 10 ? '0' : ''}${month} / ${year}`
// );

//!__________________________________________________
//! Bugungi sana va vaqt

// const now0 = new Date();
// console.log(`year: ${now0.getFullYear()}`);
// const now = new Date();
// console.log(`month: ${now.getMonth() +1}`);
// const now1 = new Date();
// console.log(`days a week: ${now1.getDay()}`);
// const now3 = new Date();
// console.log(`day: ${now3.getDate()}`);
// const now4 = new Date();
// console.log(`hour: ${now4.getHours()}`);
// const now5 = new Date();
// console.log(`minut: ${now5.getMinutes()}`);
// const now6 = new Date();
// console.log(`second: ${now6.getSeconds()}`);
// const now7 = new Date();
// console.log(`vaqt: ${now7.toLocaleTimeString()}`);

//!__________________________________________________
//! qoshimcha vazifa

// let i = 120;
// setInterval(()=> {
//   if (i > 0) {
//     i--;
//     console.clear();
//     console.log(
//       `${(i / 60) | (0 < 10) ? '0' : ''
//       }${i % 60}`
//     );
//   } else {
//     clearInterval();
//   }
// }, 100);

//!__________________________________________________

// setInterval(()=> {
//   const now = new Date();
//   console.clear();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

//!__________________________________________________

// const calc = prompt("Amal bajaring Masalan (1 + 2 - 3 * 4 / 5): ");
// console.log(eval(calc));

//!__________________________________________________

// const num1 = parseInt(prompt('1-son: '));
// const num2 = parseInt(prompt('2-son: '));
// const operator = prompt('Operatorni kiriting: ');

// switch (operator) {
//   case '+':
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
//   case `-`:
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     break;
//   case `/`:
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     break;
//   case `*`:
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     break;
//   default:
//     console.log("noto'g'ri: ");
// }

//!__________________________________________________

// const num1 = parseInt(prompt('1-son: '));
// const num2 = parseInt(prompt('2-son: '));
// const operator = prompt('Operatorni kiriting: ');

// if (operator == '+') {
//   console.log(`${num1} + ${num2} = ${num1 + num2}`);
// } else if (operator == '-') {
//   console.log(`${num1} - ${num2} = ${num1 - num2}`);
// } else if (operator == '/') {
//   console.log(`${num1} / ${num2} = ${num1 / num2}`);
// } else if (operator == '*') {
//   console.log(`${num1} * ${num2} = ${num1 * num2}`);
// } else {
//   console.log("noto'g'ri: ");
// }

//!__________________________________________________

// let baho = +prompt("bahoingizni kiriting 5dan 3gach: ");
// switch (baho) {
//   case 5:
//     console.log("zo'r");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   default:
//     console.log("Imtihon topshiring!");
// }
