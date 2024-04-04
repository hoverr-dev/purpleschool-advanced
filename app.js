'use strict';

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

console.log(21341123131314131412414123n);
console.log(BigInt(21341123131314131412414123));
console.log(BigInt('21341123131314131412414123'));

console.log(10n + 10n);
console.log(10n + BigInt(10));
console.log(10n * 10n);
console.log(
	21341123131314131412414123n * 21341123131314131412414123n
);

console.log(10n * BigInt(10));
console.log(10n / 3n);
console.log(10 / 3);

console.log(10n < 20);
console.log(10n == 10);
console.log(10n === 10);
console.log(typeof 10n);
