import "./css/reset.css";
import "./css/fade.scss";
import "animate.css";
import Carousel from ".";

export default class Fade extends Carousel {
	constructor(el, { defaultIndex, duration }) {
		super(el);
		this.duration = duration;
		this._index = defaultIndex;

		this.init();
	}

	static t = null;

	init() {
		this.show(true);
		this.bindEvent();
		this.play();
	}

	get currentIndex() {
		return this._index;
	}

	set currentIndex(newValue) {
		this.update(() => {
			this._index = newValue;
		});
	}

	handlerMouseEnter() {
		clearInterval(Fade.t);
	}

	handlerMouseLeave() {
		this.play();
	}

	handlerDotClick(e) {
		e.target.className === "dot" &&
			(this.currentIndex = [].indexOf.call(this.$dots, e.target));
	}

	show(isInitial) {
		if (isInitial) {
			for (let i = 0; i < this.$imgWrappers.length; i++) {
				this.$imgWrappers[i].classList.add("animate__fadeOut");
			}
		}
		this.$imgWrappers[this.currentIndex].classList.remove("animate__fadeOut");
		this.$imgWrappers[this.currentIndex].classList.add("animate__fadeIn");
		this.$dots[this.currentIndex].classList.add("active");
	}

	hide() {
		this.$imgWrappers[this.currentIndex].classList.remove("animate__fadeIn");
		this.$dots[this.currentIndex].classList.remove("active");
		this.$imgWrappers[this.currentIndex].classList.add("animate__fadeOut");
	}

	update(setIndex) {
		this.hide();
		setIndex();
		this.show();
	}

	play() {
		Fade.t = setInterval(() => {
			this.currentIndex >= this.$imgWrappers.length - 1
				? (this.currentIndex = 0)
				: this.currentIndex++;
		}, this.duration);
	}
}
