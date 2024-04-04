<template>
	<div class="hero">
		<img class="hero__bg-1" src="@/assets/bg_holder.png" alt="" />
		<img class="hero__bg-2" src="@/assets/bgimg_00_02.png" alt="" />
		<img class="hero__bg-3" src="@/assets/bgimg_02_02.png" alt="" />
		<img class="hero__bg-4" src="@/assets/bg02.png" alt="" />
		<img class="hero__logo" src="@/assets/char-logo-white.png" alt="" />
		<div class="parallax" ref="parallax">
			<img
				ref="parallaxImg"
				class="parallax__img"
				src="@/assets/Paralax/paralax.png"
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
	gsap.to('.hero__bg-1', {
		rotationZ: '360deg',
		transformPerspective: 1000,
		duration: 50,
		repeat: -1,
		ease: 'linear',
		transformOrigin: '50% 50%',
	});
	gsap.to('.hero__bg-1', {
		left: '-20%',
		delay: 1.5,
		duration: 0.8,
		ease: 'bounce.out',
	});
	gsap.to('.hero__bg-2', {
		top: '10%',
		delay: 1.7,
		duration: 1.5,
		ease: 'elastic.out',
	});
	gsap.to('.hero__bg-3', {
		rotationZ: '45deg',
		left: '50%',
		delay: 1.7,
		duration: 0.3,
		ease: 'linear',
		transformOrigin: '50% 50%',
	});
	gsap.to('.hero__bg-4', {
		bottom: '-10%',
		opacity: 0.5,
		delay: 2,
		duration: 0.5,
		ease: 'linear',
	});
	gsap.to('.parallax__img', {
		top: '10%',
		height: '80vh',
		opacity: 1,
		delay: 1.3,
		duration: 0.1,
		ease: 'linear',
	});

	parallax.value.addEventListener('mousemove', (e) => {
		const { clientX, clientY } = e;
		const { offsetWidth, offsetHeight } = parallax.value;
		const x = (clientX / window.innerWidth - 0.5) * 40;
		const y = (clientY / window.innerHeight - 0.5) * 40;
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
		setTimeout(() => {
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
						color: 'white',
						textShadow: '1px 1px 2px black',
						ease: 'bounce.out',
						top: '0',
						delay: index * 0.2,
					});
				});
			});
		}, 1800);
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
	height: 110vh;
	overflow: hidden;
	background-color: black;
	&__logo {
		position: absolute;
		top: 6%;
		left: 6%;
		height: 20%;
		z-index: 1;
	}
	&__bg-1 {
		position: absolute;
		width: 50vw;
		height: 50vw;
		top: 10%;
		//left: -20%;
		left: -100%;
		z-index: 2;
	}
	&__bg-2 {
		position: absolute;
		width: 80vw;
		height: 80vh;
		top: -100%;
		//top: 10%;
		left: 15%;
		z-index: 1;
	}
	&__bg-3 {
		position: absolute;
		width: 80vw;
		height: 80vh;
		top: -50%;
		translate: transform(50deg);
		//left: 50%;
		left: 100%;
		z-index: 1;
	}
	&__bg-4 {
		position: absolute;
		width: 100vw;
		opacity: 0;
		bottom: -100%;
		z-index: 0;
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
		opacity: 0;
		z-index: 3;
		position: absolute;
		top: 30%;
		height: 30vh;
		filter: drop-shadow(0px 0px 10px #e33c96);
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
		color: rgba(190, 0, 35, 0);
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
	.hero__bg-3 {
		display: none;
	}
	.text_hidden {
		display: none;
	}
	.parallax {
		&__img {
		}
	}
}
</style>
