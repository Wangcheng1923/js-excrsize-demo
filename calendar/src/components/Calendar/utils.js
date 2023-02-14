// 本月第一天是星期几
export function getFirstWeekDay(year, month) {
	const date = new Date(year, month - 1, 1);
	return date.getDay();
}

// 本月天数
export function getMonthDayCount(year, month) {
	const date = new Date(year, month, 0);
	return date.getDate();
}

// 上月剩余天数数组
export function getLastDayRestCount(year, month) {
	const days = getFirstWeekDay(year, month);
	let lastDays = getMonthDayCount(year, month - 1);
	const restDays = [];

	while (restDays.length < days) {
		restDays.push(lastDays--);
	}

	return restDays.reverse();
}

// 下个月剩余天数
export function getNextDayRestCount(year, month) {
	const lastMonthRestDayCount = getFirstWeekDay(year, month);
	const currentMonthDaycount = getMonthDayCount(year, month);
	const nextMonthDayCount = 42 - (lastMonthRestDayCount + currentMonthDaycount);

	let restDays = [];

	for (let i = 1; i <= nextMonthDayCount; i++) {
		restDays.push(i);
	}

	return restDays;
}

// 获取时间信息
export function getDateInfo(timeStamp) {
	let date = timeStamp ? new Date(timeStamp) : new Date();

	return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

// 格式化时间信息
export function getFormatDate(year, month, date) {
	const dateArr = [year, month, date];

	for (let i = 1; i < dateArr.length; i++) {
		dateArr[i] < 10 && (dateArr[i] = `0${dateArr[i]}`);
	}

	return dateArr.join("-");
}
