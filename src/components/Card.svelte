<script>
	export let excercises;
	export let currentExcercise;

	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
</script>

<div
	class="grid place-items-center font-sans w-screen m-5 p-3 bg-[#F1F2EB]"
	transition:scale={{ delay: 150, duration: 400, easing: quintOut }}
>
	<div class="flex-auto">
		<p class="text-center text-2xl my-5">
			{excercises[currentExcercise].reps +
				'x ' +
				excercises[currentExcercise].name[0].toUpperCase() +
				excercises[currentExcercise].name.slice(1)}
		</p>
		<img src={excercises[currentExcercise].src} alt="" width="250px" />
	</div>
</div>
