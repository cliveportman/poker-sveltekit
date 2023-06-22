<script lang="ts">
	import Button from '$components/Button.svelte';
	import HappyFaceIcon from '$svgs/HappyFace.svelte';
	import NeutralFaceIcon from '$svgs/NeutralFace.svelte';
	import { each } from 'svelte/internal';
	let proteinG = 0,
		fatG = 0,
		carbG = 0;

	const options = [
		{
			value: 1,
			colour: 'bg-lime-50',
		},
		{
			value: 2,
			colour: 'bg-lime-100',
		},
		{
			value: 3,
			colour: 'bg-lime-200',
		},
		{
			value: 5,
			colour: 'bg-lime-300',
		},
		{
			value: 8,
			colour: 'bg-lime-400',
		},
		{
			value: 13,
			colour: 'bg-lime-500',
		},
		{
			value: 21,
			colour: 'bg-lime-600',
		},
		{
			value: 34,
			colour: 'bg-lime-700',
		},
	];
</script>
<div class="p-3 flex flex-col justify-between h-full">
<div class="grid gap-3">
	{#each options as option}
		<button type="button" class="block w-full border-0 p-3 bg-white bg-opacity-80 text-black font-medium text-xl mix-blend-screen" >
			{option.value}
		</button>
	{/each}
</div>
<div class="">
	<button type="button" class="block w-full border-0 p-3 bg-lime-400 bg-opacity-90 text-transparent font-medium text-xl mix-blend-screen text-black">
		Stick
	</button>
</div>
</div>

<style lang="postcss">
	.range-slider.protein::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.6rem;
		height: 1.6rem;
		background: #bef264;
		cursor: pointer;
		border-radius: 50%;
	}
	.range-slider.fat::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.6rem;
		height: 1.6rem;
		background: #fde047;
		cursor: pointer;
		border-radius: 50%;
	}
</style>
