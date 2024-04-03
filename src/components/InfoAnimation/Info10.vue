<template>
	<div class="char-10">
		<div ref="cursor" class="char-10__fire fire"></div>
		<div ref="canvas" class="char-10__wrapper">
			<div
				v-for="(square, index) in squares"
				:key="index"
				class="char-10__square square"
				:class="{ disappear: square.disappear }"
			></div>
		</div>
		<div class="char-10__info">
			<img
				class="char-10__image"
				src="@/assets/characters/More/10.png"
				alt=""
			/>
			<p class="char-10__text">
				<span
					v-for="(char, index) in textChars"
					:key="index"
					class="char-10__char"
					:class="{ disappeartext: char.disappeartext }"
					>{{ char.char }}</span
				>
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import { gsap } from 'gsap';
export default {
	props: { info: Object },
	setup() {
		const cursor = ref(null);
		const canvas = ref(null);
		const squares = reactive(
			[...Array(400).keys()].map(() => ({ disappear: false }))
		);
		const textChars = reactive(
			Array.from(
				"Chihiro Fujisaki (不二咲 千尋), is a student in Hope's Peak Academy's Class 78th, and a participant of the Killing School Life featured in Danganronpa: Trigger Happy Havoc. Chihiro's title is the Ultimate Programmer (超高校級の「プログラマー」 lit. Super High School Level Programmer)."
			).map((char) => ({ char, disappeartext: true }))
		);
		onMounted(() => {
			squares.forEach((square) => {
				setTimeout(() => {
					square.disappear = true;
				}, Math.random() * 1000);
			});
			textChars.forEach((char, index) => {
				setTimeout(() => {
					char.disappeartext = false;
				}, index * 50);
			});
		});

		onUnmounted(() => {});

		return { canvas, squares, cursor, textChars };
	},
};
</script>

<style lang="scss" scoped>
.char-10 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		z-index: 11;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		grid-template-rows: repeat(20, 1fr);
		width: 100vw;
		height: 100vh;
	}
	&__square {
		background-color: black;
		pointer-events: none;
		transition: opacity 0.5s ease;
	}
	&__char {
		display: inline-block;
		transition: display 0.5s ease;
	}

	&__info {
		margin: 0 5%;
		position: absolute;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
	}
	&__image {
		width: 45%;
	}
	&__text {
		width: 45%;
		text-align: center;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-size: 2rem;
		font-style: normal;
		color: white;
		text-shadow: 1px 1px 2px black;
	}
}
.disappeartext {
	display: none;
}
.disappear {
	opacity: 0;
}
</style>
