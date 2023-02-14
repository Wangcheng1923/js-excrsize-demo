export default class Carousel {
	constructor(el) {
		this.$el = document.querySelector(el);
		this.$imgWrappers = this.$el.getElementsByClassName("img-wrapper");
		this.$dotWrapper = this.$el.querySelector(".indicator");
		this.$dots = this.$dotWrapper.querySelectorAll(".dot");
	}

	bindEvent() {
		this.$el.addEventListener(
			"mouseenter",
			this.handlerMouseEnter.bind(this),
			false,
		);
		this.$el.addEventListener(
			"mouseleave",
			this.handlerMouseLeave.bind(this),
			false,
		);
		this.$dotWrapper.addEventListener(
			"click",
			this.handlerDotClick.bind(this),
			false,
		);
	}

	static create(el, { type, defaultIndex, duration }) {
		function createInstence(res) {
			return new res.default(el, {
				defaultIndex,
				duration,
			});
		}

		switch (type) {
			case "fade":
				return import("./Fade").then(createInstence);
			case "slide":
				return import("./Slide").then(createInstence);
			default:
				return import("./Fade").then(createInstence);
		}
	}
}
