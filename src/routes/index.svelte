<script>
	// variables
	const excercises = [
		{
			name: 'push ups',
			reps: 15
		},
		{
			name: 'abs',
			reps: 20
		},
		{
			name: 'squats',
			reps: 20
		},
		{
			name: 'legs',
			reps: 20
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
</script>

{#if !started && currentExcercise > 0}
	<div class="flex justify-center flex-col m-auto h-screen text-center bg-alice">
		<h1 class="text-tomato text-6xl font-title py-1">GOOD JOB</h1>
		<p class="text-tomato text-6xl font-title">
			TIME: {Math.round(counter / 60)} MINUTES AND {counter % 60} SECONDS
		</p>
	</div>
{:else if !started}
	<div class="flex justify-center flex-col m-auto h-screen bg-alice">
		<button
			class="text-tomato text-7xl cursor-pointer font-title"
			on:click={() => (started = !started)}>WORKOUT</button
		>
	</div>
{:else}
	<div class="flex justify-center flex-col h-screen bg-alice">
		<div class="flex justify-center flex-col m-auto">
			<button
				on:click={setFinish}
				class="text-tomato text-7xl cursor-pointer font-title text-center"
			>
				{excercises[currentExcercise].reps}
				{excercises[currentExcercise].name.toUpperCase()}
			</button>
		</div>
		<div
			class="h-2 bg-tomato"
			class:first={counterSet == 0}
			class:second={counterSet == 1}
			class:third={counterSet == 2}
		/>
	</div>
{/if}

<style>
	.first {
		width: 0%;
	}
	.second {
		width: 33%;
	}
	.third {
		width: 66%;
	}
</style>
