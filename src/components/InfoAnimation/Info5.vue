<template>
	<div class="char-5">
		<div class="char-5__wrapper">
			<div ref="bookRef" class="char-5__book">
				<img src="@/assets/InfoAssets/5/1.jpg" class="char-5__cover" />
				<div class="char-5__right-content">
					<img
						class="char-5__right-img"
						src="@/assets/InfoAssets/5/4.png"
						alt=""
					/>
					<img
						class="char-5__image"
						src="@/assets/characters/More/5.png"
						alt=""
					/>
				</div>
				<div class="char-5__left-content">
					<img
						class="char-5__left-img"
						src="@/assets/InfoAssets/5/2.png"
						alt=""
					/>
					<p class="char-5__text">
						Kyoko Kirigiri (霧切 響子), is a student in Hope's Peak Academy's
						Class 78th, and a participant of the Killing School Life featured in
						Danganronpa: Trigger Happy Havoc. She doesn't remember her talent at
						the beginning of the Killing Game, so her title is the Ultimate ???
						(超高校級の「???」 lit. Super High School Level ???).
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../../assets/sounds/Info/5.mp3';
export default {
	props: { info: Object },
	setup(props) {
		const bookRef = ref(null);
		const infoTimeline = gsap.timeline({});

		const soundStart = new Howl({
			src: startSoundSrc,
			volume: 0.1,
		});
		onMounted(() => {
			soundStart.play();
			infoTimeline.fromTo(
				bookRef.value,
				{
					rotationY: 0,
				},
				{
					duration: 1,
					rotationY: -180,
					ease: 'power2.inOut',
				}
			);
			infoTimeline.fromTo(
				'.char-5__right-content',
				{
					opacity: 0,
				},
				{
					duration: 0.5,
					opacity: 1,
					ease: 'power2.inOut',
				},
				'-=0.5'
			);

			infoTimeline.fromTo(
				'.char-5__left-content',
				{
					opacity: 0,
				},
				{
					duration: 0.5,
					opacity: 1,
					ease: 'power2.inOut',
				},
				'-=0.5'
			);
		});
		onUnmounted(() => {
			soundStart.stop();
			infoTimeline.clear;
		});
		return { bookRef };
	},
};
</script>

<style lang="scss" scoped>
.char-5 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__book {
		top: 2.5vh;
		left: 2.5vw;
		width: 95vw;
		height: 95vh;
		position: relative;
		transform-style: preserve-3d;
		perspective: 1000px;
	}
	&__cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
	&__right-content,
	&__left-content {
		position: absolute;
		top: 0;
		width: 50%;
		height: 100%;
		background-color: #f31c8aff;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: scale(-1, 1);
	}
	&__right-content {
		right: 0;
	}
	&__left-content {
		left: 0;
	}
	&__right-img,
	&__left-img {
		width: 100%;
		height: 100%;
		opacity: 0.95;
	}
	&__image {
		position: absolute;
		width: 95%;
	}
	&__text {
		position: absolute;
		width: 90%;
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
