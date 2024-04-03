<template>
	<div class="char-14">
		<div class="char-14__wrapper">
			<img
				class="char-14__cracks char-14__cracks_1"
				src="@/assets/InfoAssets/14/1.png"
				alt=""
			/>
			<img
				class="char-14__cracks char-14__cracks_2"
				src="@/assets/InfoAssets/14/2.png"
				alt=""
			/>
			<img
				class="char-14__cracks char-14__cracks_3"
				src="@/assets/InfoAssets/14/3.png"
				alt=""
			/>
		</div>
		<div class="char-14__info">
			<img
				class="char-14__image"
				src="@/assets/characters/More/14.png"
				alt=""
			/>
			<p class="char-14__text">
				Sakura Ogami (大神 さくら), is a student in Hope's Peak Academy's Class
				78th, and a participant of the Killing School Life featured in
				Danganronpa: Trigger Happy Havoc. Her title is the Ultimate Martial
				Artist (超高校級の「格闘家」 lit. Super High School Level Fighter).
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
			defaults: { duration: 0.1, ease: 'linear' },
		});

		onMounted(() => {
			infoTimeline.to(
				'.char-14__cracks_1, .char-14__cracks_2, .char-14__cracks_3, .char-14__info',
				{
					opacity: 0,
					duration: 0,
					delay: 0,
				}
			);
			infoTimeline.fromTo(
				'.char-14__wrapper',
				{
					backgroundColor: 'white',
				},
				{
					backgroundColor: 'rgba(255, 255, 255, 0)',
					duration: 0.1,
					delay: 0.3,
				}
			);
			infoTimeline.fromTo(
				'.char-14__cracks_1',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.1,
					delay: 0.3, // Уменьшаем задержку между первым и вторым
					onComplete: () => {
						infoTimeline.fromTo(
							'.char-14__wrapper',
							{
								backgroundColor: 'white',
							},
							{
								backgroundColor: 'rgba(255, 255, 255, 0)',
								duration: 0.2,
								onComplete: () => {
									infoTimeline.fromTo(
										'.char-14__cracks_3',
										{
											opacity: 0,
										},
										{
											opacity: 1,
											duration: 0.1,
											delay: 1, // Увеличиваем задержку между вторым и третьим
											onComplete: () => {
												infoTimeline.fromTo(
													'.char-14__wrapper',
													{
														backgroundColor: 'white',
													},
													{
														backgroundColor: 'rgba(255, 255, 255, 0)',
														duration: 0.2,
														onComplete: () => {
															infoTimeline.fromTo(
																'.char-14__cracks_2',
																{
																	opacity: 0,
																},
																{
																	opacity: 1,
																	duration: 0.1,
																	delay: 0.5,
																	onComplete: () => {
																		infoTimeline.fromTo(
																			'.char-14__wrapper',
																			{
																				backgroundColor: 'white',
																			},
																			{
																				backgroundColor:
																					'rgba(255, 255, 255, 0)',
																				duration: 0.2,
																				onComplete: () => {
																					infoTimeline.to(
																						'.char-14__cracks_1, .char-14__cracks_2, .char-14__cracks_3',
																						{
																							opacity: 0,
																						}
																					);
																					infoTimeline.fromTo(
																						'.char-14__info',
																						{
																							opacity: 0,
																						},
																						{
																							opacity: 1,
																							duration: 0.1,
																							delay: 0.3,
																						}
																					);
																				},
																			}
																		);
																	},
																}
															);
														},
													}
												);
											},
										}
									);
								},
							}
						);
					},
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
.char-14 {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	&__wrapper {
		z-index: 11;
		position: absolute;
		background-color: rgba(0, 0, 0, 0);
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__cracks {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		&_1 {
			opacity: 0;
		}
		&_2 {
			opacity: 0;
		}
		&_3 {
			opacity: 0;
		}
	}

	&__info {
		opacity: 0;
		margin: 0 5%;
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
	}
	&__image {
		width: 50%;
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
