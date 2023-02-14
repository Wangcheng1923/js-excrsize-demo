import Carousel from "./Carousel";

Carousel.create("#carousel-fade", {
	type: "fade",
	defaultIndex: 0,
	duration: 3000,
});

Carousel.create("#carousel-slide", {
	type: "slide",
	defaultIndex: 0,
	duration: 3000,
});
