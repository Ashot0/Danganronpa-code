<template>
	<div class="home box-monokuma">
		<ScrollMonokuma />
		<Preloader />
		<SkrollToTop />
		<div class="bg__line">
			<BgLogo />
			<Hero class="home__hero" />
			<TextImageBlock
				:left="true"
				:text="text1TextImageBlock"
				:img="image2TextImageBlock"
				:id="1"
			/>
			<TextImageBlock
				:left="false"
				:text="text2TextImageBlock"
				:img="image1TextImageBlock"
				:id="2"
			/><TextImageBlock
				:left="true"
				:text="text3TextImageBlock"
				:img="image4TextImageBlock"
				:id="3"
			/><TextImageBlock
				:left="false"
				:text="text4TextImageBlock"
				:img="image3TextImageBlock"
				:id="4"
			/><TextImageBlock
				:left="true"
				:text="text5TextImageBlock"
				:img="image5TextImageBlock"
				:id="5"
			/>
			<TextImageBlock
				:left="false"
				:text="text6TextImageBlock"
				:img="image6TextImageBlock"
				:id="6"
			/>
		</div>
		<div class="home__characters"><Characters class="home__character" /></div>
		<CharInfo class="home__char-info" />
		<Box class="home__box" />
		<Footer />
	</div>
</template>

<script>
import { onMounted, onUnmounted, watch, ref } from 'vue';
import { gsap } from 'gsap';
import Hero from '../components/Hero.vue';
import Box from '../components/Box.vue';
import Characters from '../components/Characters.vue';
import TextImageBlock from '../components/TextImageBlock.vue';
import image1 from '../assets/posters/1.jpg';
import image2 from '../assets/posters/2.png';
import image3 from '../assets/posters/3.png';
import image4 from '../assets/posters/4.png';
import image5 from '../assets/posters/5.jpg';
import image6 from '../assets/posters/6.png';
import SkrollToTop from '../components/SkrollToTop.vue';
import ScrollMonokuma from '../components/ScrollMonokuma.vue';
import BgLogo from '../components/BgLogo.vue';
import CharInfo from '../components/CharInfo.vue';
import Preloader from '../components/Preloader.vue';
import Footer from '../components/Footer.vue';
export default {
	components: {
		Characters,
		Hero,
		TextImageBlock,
		Box,
		SkrollToTop,
		ScrollMonokuma,
		BgLogo,
		CharInfo,
		Preloader,
		Footer,
	},
	setup(props) {
		const image1TextImageBlock = image1;
		const image2TextImageBlock = image2;
		const image3TextImageBlock = image3;
		const image4TextImageBlock = image4;
		const image5TextImageBlock = image5;
		const image6TextImageBlock = image6;
		const text1TextImageBlock =
			'Danganronpa (ダンガンロンパ Dangan Ronpa in the original Japanese) is a Japanese video game franchise developed and published originally by Spike (later merged with Chunsoft as Spike Chunsoft) and localized by NIS America in 2014 and later by Spike Chunsoft in 2020. The series currently consists of three main titles and two major spin-off games. The franchise also includes some anime, manga, mobile games, and light novel spin-offs based on the Danganronpa universe and characters.';
		const text2TextImageBlock =
			"The series revolves around an exclusive, government-funded high school called Hope's Peak Academy (希望ヶ峰学園, Kibōgamine Academy) which, every year, selects 'Ultimate' students (超高校級, Super High School Level) who are at the top of their field, and one average 'Ultimate Lucky Student' who is chosen by lottery. However, when average student Makoto Naegi arrives at the school, he loses consciousness, and when he wakes up discovers that he and his 14 classmates have been trapped within the school. Headmaster Monokuma, a sadistic robot bear, informs the students that they will be forced to live within the school forever, with only one way to leave: murdering another student and getting away with it.";
		const text3TextImageBlock =
			'When a crime scene is discovered, a Class Trial is held, in which the remaining students must decide amongst themselves who the murderer is. If the students successfully discover the murderer, the culprit will be executed, and the killing game continues. However, if they guess incorrectly, the culprit will be able to leave the school, but the other students will be executed.';
		const text4TextImageBlock =
			"Danganronpa: The Animation follows the events of the video game Danganronpa: Trigger Happy Havoc. The series follows 16 high school students locked inside 'Hope's Peak Academy,' their high school. The students are threatened by an anthropomorphic bear, Monokuma, who gives them only one way to leave the Academy: to murder another student, and not be found guilty in the subsequent trial.";
		const text5TextImageBlock =
			"The Animation follows protagonist Makoto Naegi (苗木 誠, Naegi Makoto) and fifteen other students. Each character has an 'ultimate' skill, or profession; such as the 'Ultimate Gambler', or 'Ultimate Swimmer'. When dubbed from Japan they are usually called 'Super High School Level.'";
		const text6TextImageBlock =
			"A second anime series, titled Danganronpa 3: The End of Hope's Peak High School, aired between July and September 2016. The series concludes the 'Hope's Peak Academy' storyline and is split into two parts; Future Side which takes place after Danganronpa 2: Goodbye Despair, and Despair Side, which takes place prior to the events of Trigger Happy Havoc. Seiji Kishi once again directed the series at Lerche, while Norimitsu Kaihō wrote the screenplay.";

		onMounted(() => {
			gsap.fromTo(
				'.preloader',
				{
					opacity: 1,
					width: '100vw',
					height: '100vh',
					visibility: 'visible',
					display: 'block',
				},
				{
					opacity: 0,
					width: '0%',
					height: '0%',
					visibility: 'hidden',
					display: 'none',
					delay: 1.5,
					duration: 0.3,
				}
			);
			gsap.fromTo(
				'.home__characters',
				{ filter: 'blur(1.5rem)' },
				{
					scrollTrigger: {
						trigger: '.home__characters',
						start: 'top top',
						end: 'top bottom',
						toggleActions: 'play none none none',
					},
					duration: 0.3,
					filter: 'blur(0rem)',
				}
			);
			if (window.innerHeight < window.innerWidth) {
				gsap.to('.home__characters', {
					scrollTrigger: {
						trigger: '.home__characters',
						start: 'top top',
						end: '+=500',
						scrub: true,
						pin: true,
						anticipatePin: 1,
					},
				});

				gsap.to('.home__char-info', {
					scrollTrigger: {
						trigger: '.home__char-info',
						start: 'top top',
						end: '+=600',
						scrub: true,
						pin: true,
						anticipatePin: 1,
					},
				});
			}
		});
		return {
			text1TextImageBlock,
			text2TextImageBlock,
			text3TextImageBlock,
			text4TextImageBlock,
			text5TextImageBlock,
			text6TextImageBlock,
			image1TextImageBlock,
			image2TextImageBlock,
			image3TextImageBlock,
			image4TextImageBlock,
			image5TextImageBlock,
			image6TextImageBlock,
		};
	},
};
</script>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.home {
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	&__hero {
		margin-bottom: 20vh;
		&::after {
			pointer-events: none;
			content: '';
			position: absolute;
			margin-bottom: -50vh;
			bottom: 0;
			left: 0;
			right: 0;
			height: 40vh;
			background-color: none;
			background: linear-gradient(
				0deg,
				rgba(190, 0, 35, 0) 0%,
				rgb(0, 0, 0) 100%
			);
		}
	}
	&__characters {
		width: 100vw;
		height: 100vh;
		position: relative;
		margin-bottom: 500px;
	}
}
@media (orientation: portrait) {
	.home {
		&__characters {
			margin-bottom: 0px;
		}
		&__box {
			display: none;
		}
		&__character {
			position: relative;
		}

		&__char-info {
			position: relative;
		}
	}
}
</style>
