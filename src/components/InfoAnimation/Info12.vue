<template>
	<div class="char-12">
		<div class="char-12__wrapper">
			<div ref="bookRef" class="char-12__book">
				<div class="char-12__right-content">
					<img
						class="char-12__image"
						src="@/assets/characters/More/12.png"
						alt=""
					/>
				</div>
				<div class="char-12__left-content">
					<p class="char-12__text">
						<span
							v-for="(char, index) in textChars"
							:key="index"
							class="char-12__char"
							:class="{ disappear: char.disappear }"
							>{{ char.char }}</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/12.mp3';
export default {
	props: { info: Object },
	setup() {
		const bookRef = ref(null);
		const textChars = reactive(
			Array.from(
				"Toko Fukawa (腐川 冬子), is a student in Hope's Peak Academy's Class 78th, and a participant of the Killing School Life featured in Danganronpa: Trigger Happy Havoc. Her title is the Ultimate Writing Prodigy (超高校級の「文学少女」 lit. Super High School Level Literary Girl)."
			).map((char) => ({ char, disappear: true }))
		);
		const infoTimeline = gsap.timeline();
		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.1,
		});
		onMounted(() => {
			soundStart.play();
			infoTimeline.to(bookRef.value, {
				duration: 1,
				rotationY: -180,
				ease: 'power2.inOut',
			});
			infoTimeline.to(
				'.char-12__right-content',
				{
					duration: 0.5,
					ease: 'power2.inOut',
				},
				'-=0.5'
			);
			infoTimeline.to(
				'.char-12__left-content',
				{
					duration: 0.5,
					opacity: 1,
					ease: 'power2.inOut',
				},
				'-=0.5'
			);
			infoTimeline.fromTo(
				'.char-12__image',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				},
				'-=0.5'
			);
			textChars.forEach((char, index) => {
				setTimeout(() => {
					char.disappear = false;
				}, index * 50);
			});
		});

		onUnmounted(() => {
			soundStart.stop();
			infoTimeline.clear;
		});

		return { bookRef, textChars };
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Zen+Old+Mincho&display=swap');

.char-12 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		padding: 2.5% 5%;
		z-index: 11;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		grid-template-rows: repeat(20, 1fr);
		width: 100vw;
		height: 100vh;
	}
	&__char {
		font-family: 'Dancing Script', 'Zen Old Mincho';
		font-optical-sizing: auto;
		display: inline-block;
		transition: opacity 0.5s ease;
	}
	&__book {
		width: 90vw;
		height: 90vh;
		position: relative;
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	&__right-content,
	&__left-content {
		position: absolute;
		top: 0;
		width: 50%;
		height: 100%;
		background-color: #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(-1, 1);
	}

	&__right-content {
		background: center/cover no-repeat url(/src/assets/InfoAssets/12/1.png);
		right: 0;
	}

	&__left-content {
		background: center/cover no-repeat url(/src/assets/InfoAssets/12/1.png);
		left: 0;
		opacity: 0;
	}
	&__image {
		padding: 5%;
		object-fit: contain;
		height: 100%;
		background-color: rgba(167, 1, 192, 0.6);
		width: 100%;
	}
	&__text {
		padding: 5%;
		width: 100%;
		text-align: center;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-size: 2rem;
		font-style: normal;
		color: white;
		text-shadow: 1px 1px 2px black;
		height: 100%;
		background-color: rgba(167, 1, 192, 0.6);
		width: 100%;
	}
}
.disappear {
	opacity: 0;
}
@media (orientation: portrait) {
	.char-12 {
		&__book {
			height: 50vh;
		}
		&__info {
			flex-direction: column;
		}
		&__image {
			width: 100%;
		}
		&__text {
			width: 100%;
			font-size: 1rem;
		}
	}
}
</style>
