<template>
	<div class="char-9">
		<div class="char-9__wrapper">
			<img
				class="char-9__light char-9__light_1"
				src="@/assets/InfoAssets/9/ru.png"
				alt=""
			/>
			<img
				class="char-9__light char-9__light_2"
				src="@/assets/InfoAssets/9/rd.png"
				alt=""
			/>
			<img
				class="char-9__light char-9__light_3"
				src="@/assets/InfoAssets/9/ld.png"
				alt=""
			/>
			<img
				class="char-9__light char-9__light_4"
				src="@/assets/InfoAssets/9/lu.png"
				alt=""
			/>
		</div>
		<div class="char-9__info">
			<img class="char-9__image" src="@/assets/characters/More/9.png" alt="" />
			<p class="char-9__text">
				Sayaka Maizono (舞園 さやか), is a student in Hope's Peak Academy's
				Class 78th, and a participant of the Killing School Life, featured in
				Danganronpa: Trigger Happy Havoc. Her title is the Ultimate Pop
				Sensation (超高校級の「アイドル」 lit. Super High School Level Idol).
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
			defaults: { duration: 0.2, delay: 0.7, ease: 'bounce' },
		});

		onMounted(() => {
			infoTimeline.fromTo(
				'.char-9__light_1',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
			infoTimeline.fromTo(
				'.char-9__light_2',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
			infoTimeline.fromTo(
				'.char-9__light_3',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
			infoTimeline.fromTo(
				'.char-9__light_4',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
			infoTimeline.fromTo(
				'.char-9__info',
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
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
.char-9 {
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
	&__light {
		width: 100%;
		height: 100%;
		object-fit: fill;
		position: absolute;
		&_1 {
			width: 100vw;
			height: 100vh;
		}
		&_2 {
			width: 100vw;
			height: 100vh;
		}
		&_3 {
			width: 100vw;
			height: 100vh;
		}
		&_4 {
			width: 100vw;
			height: 100vh;
		}
	}
	&__info {
		opacity: 0;
		top: 0;
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
		filter: drop-shadow(0px 0px 40px rgb(255, 1, 255));
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
		filter: drop-shadow(0px 0px 40px rgb(255, 1, 255));
	}
}
</style>
