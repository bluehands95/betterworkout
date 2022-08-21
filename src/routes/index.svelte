<script>
	// variables
	const excercises = [
		{
			name: 'push ups',
			reps: 16
		},
		{
			name: 'abs',
			reps: 17
		},
		{
			name: 'squats',
			reps: 20
		},
		{
			name: 'legs',
			reps: 16
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
	<div class="flex justify-center flex-col m-auto h-screen text-center">
		<h1 class="text-crimson text-6xl font-title py-1">GOOD JOB</h1>
		<p class="text-crimson text-6xl font-title">
			TIME: {Math.round(counter / 60)} MINUTES
		</p>
	</div>
{:else if !started}
	<div class="flex justify-center flex-col m-auto h-screen">
		<button
			class="text-crimson text-7xl cursor-pointer font-title"
			on:click={() => (started = !started)}>WORKOUT</button
		>
	</div>
{:else}
	<div class="flex justify-center flex-col m-auto h-screen">
		<button on:click={setFinish}>
			<h1 class="text-crimson text-7xl cursor-pointer font-title">
				{excercises[currentExcercise].reps}
				{excercises[currentExcercise].name.toUpperCase()}
			</h1></button
		>
	</div>
{/if}
