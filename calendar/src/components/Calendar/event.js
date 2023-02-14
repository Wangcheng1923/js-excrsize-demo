let target = null;
export default (container, handler) => {
	container.addEventListener(
		"click",
		function (e) {
			const tar = e.target;
			const className = tar.className;

			if (!className.includes("text-#ccc")) {
				if (target) {
					target.className = target.className.replace(
						" bg-blue text-white",
						"",
					);
				}
				target = tar;
				tar.className += " bg-blue text-white";

				handler?.(tar.dataset.date);
			}
		},
		false,
	);
};
