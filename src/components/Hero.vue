<template>
	<div class="hero">
		<img class="hero__logo" src="@/assets/char-logo.png" alt="" />
		<div class="parallax" ref="parallax">
			<img
				ref="parallaxImg"
				class="parallax__img"
				src="@/assets/Monokuma/paralax.png"
				alt="Parallax Image"
			/>

			<div class="text-container" ref="textContainer">
				<h1 class="text_1 text_hidden">Welcome to</h1>
				<h1 class="text_2 text_hidden">Danganronpa</h1>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

const parallax = ref(null);
const textContainer = ref(null);

onMounted(() => {
	parallax.value.addEventListener('mousemove', (e) => {
		const { clientX, clientY } = e;
		const { offsetWidth, offsetHeight } = parallax.value;
		const x = (clientX / window.innerWidth - 0.5) * 140;
		const y = (clientY / window.innerHeight - 0.5) * 140;
		gsap.to('.parallax__img', {
			duration: 0.5,
			rotationX: -y,
			rotationY: x,
			transformPerspective: 1000,
			ease: 'power2.out',
		});

		gsap.to('.text-container', {
			duration: 0.5,
			rotationX: -y,
			rotationY: x,
			transformPerspective: 1000,
			ease: 'power2.out',
		});
	});

	parallax.value.addEventListener('mouseleave', () => {
		gsap.to('.parallax__img', {
			duration: 0.5,
			rotationX: 0,
			rotationY: 0,
			transformPerspective: 500,
			ease: 'power2.out',
		});

		gsap.to('.text-container', {
			duration: 0.5,
			rotationX: 0,
			rotationY: 0,
			transformPerspective: 500,
			ease: 'power2.out',
		});
	});
	const textElement1 = textContainer.value.querySelectorAll('.text_1');
	const textElement2 = textContainer.value.querySelectorAll('.text_2');
	const textElement = (elem) => {
		elem.forEach((text) => {
			const chars = text.innerText.split('');
			text.innerText = '';
			chars.forEach((char, index) => {
				const span = document.createElement('span');
				span.innerText = char;
				span.style.position = 'relative';
				span.style.top = '0';
				text.appendChild(span);
				gsap.to(span, {
					opacity: 1,
					duration: 0.5,
					color: 'black',
					ease: 'bounce.out',
					top: '0',
					delay: index * 0.2,
				});
			});
		});
	};
	textElement(textElement1);
	setTimeout(() => {
		textElement(textElement2);
	}, 2200);
});

onUnmounted(() => {});
</script>

<style lang="scss" scoped>
.hero {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #be0022ff;

	&__logo {
		position: absolute;
		top: 6%;
		left: 6%;
		height: 20%;
		z-index: 1;
	}
}
.parallax {
	z-index: 3;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	&__img {
		z-index: 3;
		position: absolute;
		top: 10%;
		filter: drop-shadow(0px 0px 40px #e33c96);
	}
}
.text-container {
	z-index: 2;
	position: absolute;
	top: 25%;
	width: 100vw;
	left: 0;
	right: 0;
	height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.text {
	&_hidden {
		font-family: 'Pixelify Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		position: absolute;
		font-size: 500%;
		color: #be0022ff;
		z-index: 2;
	}
	&_1 {
		right: 60%;
		transform: rotate(-45deg);
	}
	&_2 {
		left: 60%;
		transform: rotate(45deg);
	}
}
@media (orientation: portrait) {
	.text_hidden {
		display: none;
	}
	.parallax {
		&__img {
			width: 70%;
		}
	}
}
</style>
