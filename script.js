/* Set width of all animated text to match container */
let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
	parent[i].style.width = parent[i].children[0].clientWidth + "px";
}

var swiper = new Swiper(".blog-slider", {
	spaceBetween: 30,
	effect: "fade",
	loop: true,
	mousewheel: {
		invert: false,
	},
	// autoHeight: true,
	pagination: {
		el: ".blog-slider__pagination",
		clickable: true,
	},
});