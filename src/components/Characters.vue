<template>
	<div :class="{ characters: true, characters_notactive: activeItem === null }">
		<Character
			v-for="character in characters"
			:character="character"
			:class="{
				active: activeItem === character.id,
				inactive: activeItem !== character.id && activeItem !== null,
				notactive: activeItem === null,
			}"
			@click="setActiveItem(character.id)"
		/>
	</div>
</template>

<script>
import Character from './Character';
import { Howl, Howler } from 'howler';
import startSoundSrc from '../assets/sounds/CharStart.mp3';
export default {
	data() {
		return {
			characters: [
				{
					picture: '1.png',
					bgColor: '#3ADE17FF',
					id: 1,
					height: '0',
					nameJapane: '葉隠 康比呂',
					nameEnglish: 'Hagakure Yasuhiro',
					specialty: '超高校級の占い師',
				},
				{
					picture: '2.png',
					bgColor: '#ECEB01FF',
					id: 2,
					height: '10',
					nameJapane: '朝日奈 葵',
					nameEnglish: 'Asahina Aoi',
					specialty: '超高校級のスイマー',
				},
				{
					picture: '3.png',
					bgColor: '#F02907FF',
					id: 3,
					height: '5',
					nameJapane: '大和田 紋土',
					nameEnglish: 'Ōwada Mondo',
					specialty: '超高校級の暴走族',
				},
				{
					picture: '4.png',
					bgColor: '#0268EAFF',
					id: 4,
					height: '5',
					nameJapane: '十神 白夜',
					nameEnglish: 'Togami Byakuya',
					specialty: '超高校級の御曹司',
				},
				{
					picture: '5.png',
					bgColor: '#F31C8AFF',
					id: 5,
					height: '5',
					nameJapane: '霧切 響子',
					nameEnglish: 'Kirigiri Kyōko',
					specialty: '超高校級の???',
				},
				{
					picture: '6.png',
					bgColor: '#2E06C5FF',
					id: 6,
					height: '10',
					nameJapane: '石丸 清多夏',
					nameEnglish: 'Ishimaru Kiyotaka',
					specialty: '超高校級の風紀委員',
				},
				{
					picture: '7.png',
					bgColor: '#F99700FF',
					id: 7,
					height: '0',
					nameJapane: '桑田 怜恩',
					nameEnglish: 'Kuwata Reon',
					specialty: '超高校級の野球選手',
				},
				{
					picture: '8.png',
					bgColor: '#02CD22FF',
					id: 8,
					height: '5',
					nameJapane: '苗木 誠',
					nameEnglish: 'Naegi Makoto',
					specialty: '超高校級の幸運',
				},
				{
					picture: '9.png',
					bgColor: '#F95CD7FF',
					id: 9,
					height: '9',
					nameJapane: '舞園 さやか',
					nameEnglish: 'Maizono Sayaka',
					specialty: '超高校級のアイドル',
				},
				{
					picture: '10.png',
					bgColor: '#9DE808FF',
					id: 10,
					height: '10',
					nameJapane: '不二咲 千尋',
					nameEnglish: 'Fujisaki Chihiro',
					specialty: '超高校級のプログラマー',
				},
				{
					picture: '11.png',
					bgColor: '#F51A02FF',
					id: 11,
					height: '0',
					nameJapane: 'セレスティア',
					nameEnglish: 'Seresutia Rūdenberuku',
					specialty: 'ギャンブラー',
				},
				{
					picture: '12.png',
					bgColor: '#A601C1FF',
					id: 12,
					height: '2',
					nameJapane: '腐川 冬子',
					nameEnglish: 'Fukawa Tōko',
					specialty: '超高校級の文学少女」',
				},
				{
					picture: '13.png',
					bgColor: '#ED002FFF',
					id: 13,
					height: '-15',
					nameJapane: '山田 一二三',
					nameEnglish: 'Yamada Hifumi',
					specialty: '超高校級の同人作家',
				},
				{
					picture: '14.png',
					bgColor: '#CC5106FF',
					id: 14,
					height: '-19',
					nameJapane: '大神 さくら',
					nameEnglish: 'Ōgami Sakura',
					specialty: '超高校級の格闘家',
				},
				{
					picture: '15.png',
					bgColor: '#F418B9FF',
					id: 15,
					height: '2',
					nameJapane: '江ノ島 盾子',
					nameEnglish: 'Enoshima Junko',
					specialty: '超高校級のギャル',
				},
			],
			activeItem: null,
		};
	},
	components: {
		Character,
	},
	methods: {
		setActiveItem(id) {
			if (this.activeItem === id) {
				setTimeout(() => {
					this.activeItem = null;
				}, 2300);
			} else {
				const soundStart = new Howl({
					src: startSoundSrc,
					volume: 0.1,
					onplay: () => {
						this.activeItem = id;
					},
				});
				soundStart.play();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.characters {
	z-index: 9;
	top: 0%;
	bottom: 0;
	background: linear-gradient(
		to right,
		#37d716ff,
		#eceb01ff,
		#f02907ff,
		#0268e9ff,
		#f31c89ff,
		#2e06c5ff,
		#f99600ff,
		#02cd22ff,
		#f95cd7ff,
		#9de808ff,
		#f51a02ff,
		#a601c1ff,
		#ec002fff,
		#cb5106ff,
		#f318b9ff
	);
	overflow: hidden;
	max-width: 100vw;
	max-height: 100vh;
	display: grid;
	grid-template-columns: repeat(15, auto);
	grid-template-rows: repeat(1, auto);
	position: relative;
	margin-left: 0;
	transition: margin-left 500ms 0.02s;
	&_notactive {
		&:hover {
			margin-left: -5px;
		}
	}
}
@media (orientation: portrait) {
	.characters {
		height: 30vh;
	}
}

.notactive {
	top: 0%;
	bottom: 0;
	&:hover {
		transition: width 0.5s, scale 0.35s;
		width: calc(100vw / 13);
		transform: scale(1.1);
		z-index: 6;
	}
}
.active {
	top: 0%;
	bottom: 0;
	width: 100vw;
}
.inactive {
	width: 0px;
	overflow: hidden;
	transition: all 0.5s;
}
</style>
