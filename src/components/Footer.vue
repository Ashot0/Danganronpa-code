<template>
	<footer class="footer">
		<div>
			<p>Created by Illia Golovan</p>
			<p>2024</p>
		</div>
		<div>
			<p><a href="https://github.com/Ashot0">My Github</a></p>
			<p>
				<a href="https://www.linkedin.com/in/illia-golovan-816a14269/">
					My LinkedIn
				</a>
			</p>
			<p><a href="mailto:ilia.holovan@gmail.com">Send email</a></p>
		</div>
	</footer>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
	setup() {
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger);

			ScrollTrigger.create({
				trigger: '.footer',
				start: 'bottom bottom',
				end: 'bottom top',
				toggleActions: 'restart reset restart reset',
				onEnter: () => gsap.to('.footer', { height: '100px', duration: 0.5 }),
				onLeave: () => gsap.to('.footer', { height: '0%', duration: 0.5 }),
			});
		});

		return {};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	font-family: Arial, Helvetica, sans-serif;
	font-optical-sizing: auto;
	font-weight: 700;
	font-size: 120%;
	font-style: normal;
	position: sticky;
	left: 0;
	bottom: 0;
	height: 0%;
	width: 100vw;
	padding: 1% 15vw 1% 15vw;
	background-color: #333;
	color: white;
	text-shadow: 1px 1px 4px rgb(255, 0, 187);
	text-align: start;
	display: flex;
	justify-content: space-around;
	a {
		color: white;
		text-decoration: none;
	}
}
</style>
