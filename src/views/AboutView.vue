<template>
	<div class="about">
		<SkrollToTop />
		<h1>This is an about page</h1>
		<TextImageBlock :text="pppppp" :img="image" />
		<Box />
		<div class="">
			{{ this.$store.getters.NAME }}
		</div>
		<BoxT />
	</div>
</template>

<script>
import TextImageBlock from '../components/TextImageBlock.vue';
import image from '../assets/posters/1.jpg';
import Box from '../components/Box.vue';
import BoxT from '../components/BoxT.vue';
import SkrollToTop from '../components/SkrollToTop.vue';

export default {
	components: {
		TextImageBlock,
		Box,
		BoxT,
		SkrollToTop,
	},
	data() {
		return {
			image: image,
			pppppp:
				'Danganronpa (ダンガンロンパ Dangan Ronpa in the original Japanese) is a Japanese video game franchise developed and published originally by Spike (later merged with Chunsoft as Spike Chunsoft) and localized by NIS America in 2014 and later by Spike Chunsoft in 2020. The series currently consists of three main titles and two major spin-off games. The franchise also includes some anime, manga, mobile games, and light novel spin-offs based on the Danganronpa universe and characters.',
		};
	},
};
</script>
<style scoped>
.about {
	padding: 10px;
	/*background-color: black;*/
}
</style>
