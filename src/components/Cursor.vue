<template>
	<img class="custom-cursor" ref="cursor" src="@/assets/Cursor.png" alt="" />
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

export default {
	name: 'Cursor',
	setup() {
		const cursor = ref(null);

		const moveCursor = (event) => {
			gsap.to(cursor.value, {
				x: event.clientX,
				y: event.clientY,
				duration: 0,
			});
		};

		onMounted(() => {
			window.addEventListener('mousemove', moveCursor);
		});

		onUnmounted(() => {
			window.removeEventListener('mousemove', moveCursor);
		});

		return {
			cursor,
		};
	},
};
</script>

<style scoped>
.custom-cursor {
	position: fixed;
	width: 70px;
	height: 70px;
	overflow: visible;
	border-radius: 50%;
	pointer-events: none;
	z-index: 9999;
	transform: translate(-50%, -50%);
	/* mix-blend-mode: difference; */
}
@media (orientation: portrait) {
	.custom-cursor {
		display: none;
	}
}
</style>
