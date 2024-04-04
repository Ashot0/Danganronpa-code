<template>
	<div class="char-6">
		<div class="char-6__wrapper">
			<div class="char-6__hello-block">
				<p class="char-6__hello char-6__hello_1">みんな、</p>
				<p class="char-6__hello char-6__hello_2">立って、</p>
				<p class="char-6__hello char-6__hello_3">先生が</p>
				<p class="char-6__hello char-6__hello_4">来るよ。</p>
			</div>
		</div>
		<div class="char-6__info">
			<img class="char-6__image" src="@/assets/characters/More/6.png" alt="" />
			<p class="char-6__text">
				Yasuhiro Hagakure (葉隠 康比呂), also known as Hiro, is a student in
				Hope's Peak Academy's Class 78th, and a participant of the Killing
				School Life featured in Danganronpa: Trigger Happy Havoc. His title is
				the Ultimate Clairvoyant (超高校級の「占い師」 lit. Super High School
				Level Fortune-Teller).
			</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc1 from '../../assets/sounds/Info/61.mp3';
import startSoundSrc2 from '../../assets/sounds/Info/62.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		const soundStart1 = new Howl({
			src: startSoundSrc1,
			volume: 0.1,
		});
		const soundStart2 = new Howl({
			src: startSoundSrc2,
			volume: 0.1,
		});
		onMounted(() => {
			infoTimeline.to(
				'.char-6__hello_1, .char-6__hello_2, .char-6__hello_3, .char-6__hello_4',
				{
					opacity: 0,
					duration: 0.0001,
					delay: 0.0001,
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_1',
				{ opacity: 0, fontSize: '23rem' },
				{
					opacity: 1,
					duration: 0.3,
					delay: 2,
					fontSize: '24rem',
					ease: 'elastic.out',
					onStart: () => {
						soundStart1.play();
					},
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_1',
				{ opacity: 1, fontSize: '24rem' },
				{
					opacity: 0,
					duration: 0.1,
					delay: 1,
					fontSize: '23rem',
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_2',
				{ opacity: 0, fontSize: '23rem' },
				{
					opacity: 1,
					duration: 0.3,
					delay: 0.1,
					fontSize: '24rem',
					ease: 'elastic.out',
					onStart: () => {
						soundStart2.play();
					},
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_2',
				{ opacity: 1, fontSize: '24rem' },
				{
					opacity: 0,
					duration: 0.1,
					delay: 1,
					fontSize: '23rem',
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_3',
				{ opacity: 0, fontSize: '23rem' },
				{
					opacity: 1,
					duration: 0.3,
					delay: 0.1,
					fontSize: '24rem',
					ease: 'elastic.out',
					onStart: () => {
						soundStart1.play();
					},
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_3',
				{ opacity: 1, fontSize: '24rem' },
				{
					opacity: 0,
					duration: 0.1,
					delay: 1,
					fontSize: '23rem',
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_4',
				{ opacity: 0, fontSize: '23rem' },
				{
					opacity: 1,
					duration: 0.3,
					delay: 0.1,
					fontSize: '24rem',
					ease: 'elastic.out',
					onStart: () => {
						soundStart2.play();
					},
				}
			);
			infoTimeline.fromTo(
				'.char-6__hello_4',
				{ opacity: 1, fontSize: '24rem' },
				{
					opacity: 0,
					duration: 0.1,
					delay: 1,
					fontSize: '23rem',
				}
			);
			infoTimeline.fromTo(
				'.char-6__info',
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.3,
					delay: 0.1,
					ease: 'elastic.out',
				}
			);
		});

		onUnmounted(() => {
			soundStart1.stop();
			soundStart2.stop();
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
.char-6 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
	}
	&__hello-block {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	&__hello {
		position: absolute;
		font-family: 'Rampart One', sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 23rem;
		text-wrap: nowrap;
		left: 50%;
		transform: translate(-50%);
		opacity: 0;
		&_1 {
		}
		&_2 {
		}
		&_3 {
		}
		&_4 {
		}
	}

	&__info {
		opacity: 0;
		margin: 0 5%;
		position: absolute;
		top: 0;
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
</style>
