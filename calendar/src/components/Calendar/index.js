import { getDateInfo } from "./utils";
import { render, update } from "./render";
import event from "./event";
export default (handler) => {
	const oContainer = document.createElement("table");
	oContainer.className =
		"w-80 border-1  border-gray-200 border-solid border-collapse text-12px text-#666";

	event(oContainer, handler);

	return {
		render: render(oContainer),
		update,
		getDateInfo,
	};
};
