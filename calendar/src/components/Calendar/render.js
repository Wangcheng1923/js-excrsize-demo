import { createWeekDayNode, createDateNode } from "./creator";
export function render(container) {
	const oTHead = document.createElement("thead");
	const oTBody = document.createElement("tbody");
	const weekDayNode = createWeekDayNode();

	oTHead.className = "border-b border-solid border-b-#ddd";

	oTBody.id = "my-calendar-body";
	oTBody.className = "";

	return function (year, month) {
		const dateTrs = createDateNode(year, month);

		oTHead.appendChild(weekDayNode);
		dateTrs.forEach((tr) => {
			tr.className = "h-38px";
			oTBody.appendChild(tr);
		});

		container.appendChild(oTHead);
		container.appendChild(oTBody);

		return container;
	};
}

export function update(year, month) {
	const oTBody = document.querySelector("#my-calendar-body");

	const dateTrs = createDateNode(year, month);

	oTBody.innerHTML = "";

	dateTrs.forEach((tr) => {
		oTBody.appendChild(tr);
	});
}
