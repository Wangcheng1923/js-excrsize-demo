import { WEEK_DAYS } from "./config";
import {
	getDateInfo,
	getFormatDate,
	getLastDayRestCount,
	getMonthDayCount,
	getNextDayRestCount,
} from "./utils";
export function createWeekDayNode() {
	const oTr = document.createElement("tr");

	oTr.className = "h-38px";
	oTr.innerHTML = WEEK_DAYS.map(
		(item) => `<th class="text-center">${item}</th>`,
	).join("");

	return oTr;
}

export function createDateNode(year, month) {
	const lastMonthRestDays = getLastDayRestCount(year, month);
	const currentMonthDaysCount = getMonthDayCount(year, month);
	const nextMonthRestDays = getNextDayRestCount(year, month);
	const dateTrArr = createDateTrs(6);

	const lastMonthRestDaysTd = createRestDayTd(lastMonthRestDays);
	const currentMonthDaysTd = createCurrentDaysTd(
		currentMonthDaysCount,
		year,
		month,
	);
	const nextMonthRestDaysTd = createRestDayTd(nextMonthRestDays);
	const tdArr = [
		...lastMonthRestDaysTd,
		...currentMonthDaysTd,
		...nextMonthRestDaysTd,
	];

	let index = 0;

	dateTrArr.forEach((tr) => {
		for (let i = 0; i < 7; i++) {
			tr.appendChild(tdArr[index]);
			index++;
		}
	});

	return dateTrArr;
}

export function createDateTrs(count) {
	let trArr = [];

	for (let i = 0; i < count; i++) {
		const oTr = document.createElement("tr");
		trArr.push(oTr);
	}

	return trArr;
}

function createRestDayTd(restDays) {
	return restDays.map((item) => {
		const oTd = document.createElement("td");
		oTd.className = "text-center text-#ccc w-38px";
		oTd.innerText = item;

		return oTd;
	});
}

function createCurrentDaysTd(currentDayCount, year, month) {
	let tdArr = [];

	const [currentYear, currentMonth, currentDay] = getDateInfo();

	for (let i = 1; i <= currentDayCount; i++) {
		const oTd = document.createElement("td");

		if (currentYear === year && currentMonth === month && currentDay === i) {
			oTd.className = "text-center cursor-pointer text-orange font-700";
		} else {
			oTd.className = "cursor-pointer text-center";
		}

		oTd.innerText = i;

		oTd.setAttribute("data-date", getFormatDate(year, month, i));

		tdArr.push(oTd);
	}

	return tdArr;
}
