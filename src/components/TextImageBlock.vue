<template>
	<div
		:id="'text-image-block-' + id"
		class="text-image-block"
		ref="textImageBlock"
	>
		<div
			v-if="left"
			class="text-image-block__image text-image-block__image-left"
		>
			<img :src="img" alt="" />
		</div>
		<div v-else class="text-image-block__image text-image-block__image-right">
			<img :src="img" alt="" />
		</div>
		<div
			:class="{
				'text-image-block__text': true,
				'text-image-block__text-left': left,
				'text-image-block__text-right': !left,
			}"
		>
			{{ text }}
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
	props: {
		id: Number,
		img: String,
		text: String,
		left: Boolean,
	},
	setup(props) {
		gsap.registerPlugin(ScrollTrigger);
		const textImageBlock = ref(null);

		onMounted(() => {
			const element = textImageBlock.value;
			if (!element) return;

			gsap.fromTo(
				element.querySelector('.text-image-block__image-left'),
				{
					left: '-100%',
				},
				{
					scrollTrigger: {
						trigger: '#' + 'text-image-block-' + props.id,
						start: 'top bottom',
						end: '+=100vh',
						toggleActions: 'restart reverse restart reverse',
						scrub: 1,
					},
					left: '0',
					delay: 0.6,
					duration: 0.6,
					ease: 'linear',
				}
			);

			gsap.fromTo(
				element.querySelector('.text-image-block__text-left'),
				{
					right: '-100%',
				},
				{
					scrollTrigger: {
						trigger: '#' + 'text-image-block-' + props.id,
						start: 'top bottom',
						end: '+=100vh',
						toggleActions: 'restart reverse restart reverse',
						scrub: 1,
					},
					right: '0',
					delay: 0.6,
					duration: 0.6,
					ease: 'linear',
				}
			);

			gsap.fromTo(
				element.querySelector('.text-image-block__image-right'),
				{
					right: '-100%',
				},
				{
					scrollTrigger: {
						trigger: '#' + 'text-image-block-' + props.id,
						start: 'top bottom',
						end: '+=100vh',
						toggleActions: 'restart reverse restart reverse',
						scrub: 1,
					},
					right: '0',
					delay: 0.6,
					duration: 0.6,
					ease: 'linear',
				}
			);

			gsap.fromTo(
				element.querySelector('.text-image-block__text-right'),
				{
					left: '-100%',
				},
				{
					scrollTrigger: {
						trigger: '#' + 'text-image-block-' + props.id,
						start: 'top bottom',
						end: '+=100vh',
						toggleActions: 'restart reverse restart reverse',
						scrub: 1,
					},
					left: '0',
					delay: 0.6,
					duration: 0.6,
					ease: 'linear',
				}
			);
		});

		return { textImageBlock };
	},
};
</script>

<style lang="scss" scoped>
.text-image-block {
	padding: 0 5%;
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	&__image {
		top: 0;
		position: absolute;
		width: 50vw;
		height: 100vh;
		display: flex;

		img {
			width: 100%;
			max-height: 95%;
			height: fit-content;
			object-fit: contain;
		}
	}

	&__image-left {
		left: -100vw;
	}

	&__image-right {
		right: -100vw;
	}
	//#e33c96
	&__text {
		position: absolute;
		color: #ff8eca;
		text-shadow: 0px 0px 4px black;
		width: 50vw;
		height: fit-content;
		max-height: 100vh;
		padding: 0 3% 0 1%;
		font-size: 2rem;
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		display: inline-block;
	}

	&__text-left {
		right: -100vw;
	}

	&__text-right {
		left: -100vw;
	}
}
</style>
