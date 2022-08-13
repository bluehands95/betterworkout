<script>
	// variables
	const excercises = [
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FFdPuG8MoN3_6fMdBocPWsOE2G9I%2Ffit-in%2F1024x1024%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2016%2F10%2F31%2F575%2Fn%2F1922729%2F9e74794a58173dbd288a92.94471248_Push-Up%2Fi%2FPush-Ups.jpg&f=1&nofb=1',
			name: 'push ups',
			reps: 15
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FMC79jiV0M-zVvbIXV3SGmxmmINQ%3D%2F2122x1415%2Ffilters%3Afill(FFDB5D%2C1)%2FGettyImages-534699027-5707ff223df78c7d9ea73de0.jpg&f=1&nofb=1',
			name: 'abs',
			reps: 15
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Fcolumbustelegram.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F4%2Fde%2F4de6180d-3f57-5468-99d0-702367596464%2F598e95a4e1fc1.image.jpg%3Fresize%3D1200%252C1200&f=1&nofb=1',
			name: 'squats',
			reps: 15
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.getfitwithcedar.com%2Fwp-content%2Fuploads%2F2020%2F01%2FGoblet-squat-2.png%3Fw%3D940%26ssl%3D1&f=1&nofb=1',
			name: 'legs',
			reps: 15
		}
	];
	let started = false;
	let currentExcercise = 0;
	let counterSet = 0;
	let setComplete = false;
	let numberReps = 3;
	let counter = 0;

	// functions
	function setFinish() {
		counterSet++;
		if (counterSet < numberReps) {
			return;
		}
		counterSet = 0;
		setComplete = true;
	}

	$: if (setComplete) {
		currentExcercise++;
		setComplete = false;
		if (currentExcercise >= excercises.length) {
			started = false;
		}
	}

	setInterval(() => {
		if (!started && currentExcercise > 0) {
			return;
		}
		counter++;
	}, 1000);

	// animations
	import { fly } from 'svelte/transition';

	// components
	import Header from '../components/Header.svelte';
	import Card from '../components/Card.svelte';
</script>

<div class="h-screen bg-[#F1F2EB]" in:fly={{ z: 100, duration: 500 }}>
	<Header />
	<div class="flex flex-wrap">
		{#if !started && currentExcercise > 0}
			<div class="flex flex-col justify-center align-middle text-center font-sans w-full">
				<h1 class="text-2xl m-2">Good Job</h1>
				<p class="m-2 text-lg">Time: {Math.round(counter / 60)} minutes</p>
			</div>
		{:else if !started}
			<div class="flex w-full my-20 justify-center align-middle" in:fly={{ z: 100, duration: 500 }}>
				<button
					class="bg-raisin text-cultured text-md p-2 cursor-pointer rounded-md font-sans"
					on:click={() => (started = !started)}>Start workout</button
				>
			</div>
		{:else}
			<Card {excercises} {currentExcercise} />
			<div class="grid place-items-center w-screen">
				<button
					class="bg-raisin text-cultured text-lg p-3 cursor-pointer rounded-md my-5 text-center"
					on:click={setFinish}>{counterSet + 1} of {numberReps}</button
				>
			</div>
		{/if}
	</div>
</div>
