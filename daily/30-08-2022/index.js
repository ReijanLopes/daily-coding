const D = 30;
const M = 7; // contado desde o valor 0 ate 11
const Y = 2022

const date = new Date(Y, M, D);
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
const mo = new Intl.DateTimeFormat('pt', { month: 'short' }).format(date).replace(".", "");
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
const month = mo.replace(mo[0], mo[0].toUpperCase())
console.log(`${da}/${month}/${ye}`);