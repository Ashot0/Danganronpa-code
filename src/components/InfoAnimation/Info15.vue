<template>
	<div class="char-15">
		<div class="char-15__wrapper">
			<img
				class="char-15__monokuma"
				src="@/assets/InfoAssets/15/5.gif"
				alt=""
			/>
			<img
				class="char-15__explosive"
				src="@/assets/InfoAssets/15/3.png"
				alt=""
			/>
		</div>
		<div class="char-15__info">
			<img
				class="char-15__image"
				src="@/assets/characters/More/15.png"
				alt=""
			/>
			<p class="char-15__text">
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
export default {
	props: { info: Object },
	setup(props) {
		const infoTimeline = gsap.timeline({
			defaults: { duration: 0.2, ease: 'linear' },
		});

		onMounted(() => {
			infoTimeline.fromTo(
				'.char-15__explosive',
				{
					width: '0%',
				},
				{
					width: '200%',
					delay: 3,
					duration: 8,
					ease: 'elastic.out',
				}
			);
			infoTimeline.fromTo(
				'.char-15__monokuma',
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 0.01,
				},
				'-=60000%'
			);
			infoTimeline.fromTo(
				'.char-15__explosive',
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 1.5,
					ease: 'elastic.out',
				},
				'-=400%'
			);
			infoTimeline.fromTo(
				'.char-15__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 1,
					ease: 'elastic.out',
				},
				'-=600%'
			);
		});

		onUnmounted(() => {
			infoTimeline.clear;
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.char-15 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__monokuma {
		opacity: 1;
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%);
	}
	&__explosive {
		width: 0%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	&__info {
		top: 0;
		opacity: 0;
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
</style>
