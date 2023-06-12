<script lang="ts">
	import Button from '$components/Button.svelte';
	import HappyFaceIcon from '$svgs/HappyFace.svelte';
	import NeutralFaceIcon from '$svgs/NeutralFace.svelte';
	let proteinG = 0,
		fatG = 0,
		carbG = 0;
</script>

<div>
	<div class=" relative flex justify-between m-4">
		<p class="w-full text-white text-xl font-medium">Add a food</p>
		<button
			type="button"
			class="relative -top-1 -right-3 block w-auto border-0 p-2 bg-transparent text-white opacity-80 font-medium"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
	<div class="grid grid-cols-3 gap-2 px-4 mb-4 text-white font-medium">
		<Button
			text="Protein"
			selected={true}
			muted={false}
			bgColour="bg-lime-300"
			textColour="text-lime-300"
		>
			<span slot="svg"><HappyFaceIcon /></span>
		</Button>
		<Button
			text="Fat"
			selected={true}
			muted={false}
			bgColour="bg-yellow-300"
			textColour="text-yellow-300"
		>
			<span slot="svg"><NeutralFaceIcon /></span>
		</Button>
		<button class="block border-0 p-3 bg-sky-700 text-red-300 opacity-60">
			<div class="flex flex-col items-center">
				Carb.<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
					/>
				</svg>
			</div>
		</button>
	</div>
	<div class="px-4 text-xs mb-6">
		<p class="mb-6 text-left text-lime-300 font-medium text-2xl">
			<span class="text-sm">Protein:</span>
			{proteinG}g
		</p>
		<input
			type="range"
			min="0"
			max="50"
			bind:value={proteinG}
			step="5"
			class="block w-full h-2 bg-sky-700 appearance-none cursor-pointer dark:bg-gray-700 range-slider protein opacity-80"
		/>
	</div>
	<div class="px-4 text-xs mb-6">
		<p class="mb-6 text-left text-yellow-300 font-medium text-2xl">
			<span class="text-sm">Fat:</span>
			{fatG}g
		</p>
		<input
			type="range"
			min="0"
			max="50"
			bind:value={fatG}
			step="5"
			class="block w-full h-2 bg-sky-700 appearance-none cursor-pointer dark:bg-gray-700 range-slider fat opacity-80"
		/>
	</div>
	<div class="grid grid-cols-2 gap-2 p-4 text-white font-medium">
		<button class="block border-0 p-3 text-sky-700 bg-lime-300 opacity-80">
			<div class="flex flex-col items-center">
				Nutritious
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
					/>
				</svg>
			</div>
		</button>
		<button class="block border-0 p-3 bg-sky-700 text-red-300 opacity-60">
			<div class="flex flex-col items-center">
				Just calories
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
					/>
				</svg>
			</div>
		</button>
	</div>
</div>
<div class="flex p-4">
	<button type="button" class="block w-full border-0 p-3 bg-white text-sky-800 font-medium text-xl">
		Save
	</button>
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
