import Carousel from ".";
import "./css/reset.css";
import "./css/slide.scss";
export default class Slide extends Carousel {
	constructor(el, { defaultIndex, duration }) {
		super(el);
		this.$imgStage = document.querySelector(".img-stage");

		this.duration = duration;
		this._index = defaultIndex;
		this.imgWidth = this.$imgWrappers[0].offsetWidth;
		this.init();
	}

	static t = null;

	init() {
		this.clone();
		this.update(null, true);
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
		clearInterval(Slide.t);
	}

	handlerMouseLeave() {
		this.play();
	}

	handlerDotClick(e) {
		e.target.className === "dot" &&
			(this.currentIndex = [].indexOf.call(this.$dots, e.target));
		this.slide();
	}

	update(setIndex, isInitial) {
		let currentIndex;
		if (!isInitial) {
			currentIndex =
				this.currentIndex >= this.$imgWrappers.length - 1
					? 0
					: this.currentIndex;
			this.$dots[currentIndex].classList.remove("active");
			setIndex();
		}

		currentIndex =
			this.currentIndex >= this.$imgWrappers.length - 1 ? 0 : this.currentIndex;
		this.$dots[currentIndex].classList.add("active");
	}

	clone() {
		const firstNode = this.$imgWrappers[0];
		const cloneNode = firstNode.cloneNode(true);
		firstNode.parentNode.appendChild(cloneNode);
		console.log(firstNode.parentNode);
	}

	slide() {
		this.$imgStage.style.transition = "transform .3s ease 0s";

		this.$imgStage.style.transform = `translate3d(-${
			this.currentIndex * this.imgWidth
		}px,0,0)`;
	}

	reset() {
		setTimeout(() => {
			this.$imgStage.style.transition = "none";
			this.$imgStage.style.transform = "translate3d(0,0,0)";
		}, 500);
	}

	play() {
		Slide.t = setInterval(() => {
			this.currentIndex++;
			this.slide();

			if (this.currentIndex >= this.$imgWrappers.length - 1) {
				this.currentIndex = 0;
				this.reset();
			}
		}, this.duration);
	}
}
