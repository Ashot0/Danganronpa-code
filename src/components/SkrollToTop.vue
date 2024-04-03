<template>
	<div @click="scrollToTop()" class="scroll-up">
		<img src="@/assets/pagetop.png" alt="" />
	</div>
</template>

<script>
export default {
	methods: {
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		},
		handleScroll() {
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const showScrollButton = scrollY > viewportHeight * 1.2;

			const scrollUpButton = document.querySelector('.scroll-up');
			if (scrollUpButton) {
				if (showScrollButton) {
					scrollUpButton.classList.add('show');
				} else {
					scrollUpButton.classList.remove('show');
				}
			}
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style lang="scss" scoped>
.scroll-up {
	position: fixed;
	bottom: 20px;
	right: 20px;
	cursor: pointer;
	font-size: 24px;
	color: #333;
	z-index: 1000;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s;
}

.scroll-up.show {
	opacity: 1;
	pointer-events: auto;
}
</style>
