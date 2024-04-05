'use strict';

/* 
	Сделать функцию, которая принимает пользователя и
	проверяет, есть ли у него сегодня день рождения или нет
*/

const user1 = {
	name: 'Vasia',
	birthday: '04/05/2024',
};

function isBirthday(user) {
	const birthdayDate = new Date(user.birthday);
	const now = new Date();

	if (birthdayDate.getMonth() !== now.getMonth()) return false;
	if (birthdayDate.getDate() !== now.getDate()) return false;
	return true;
}

console.log(isBirthday(user1));
