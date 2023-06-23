<script lang="ts">
	let selectedValue: null | number = null;
	let canVote = true;
	let voted = false;

	const options = [
		{
			value: 1,
			colour: 'bg-lime-50'
		},
		{
			value: 2,
			colour: 'bg-lime-100'
		},
		{
			value: 3,
			colour: 'bg-lime-200'
		},
		{
			value: 5,
			colour: 'bg-lime-300'
		},
		{
			value: 8,
			colour: 'bg-lime-400'
		},
		{
			value: 13,
			colour: 'bg-lime-500'
		},
		{
			value: 21,
			colour: 'bg-lime-600'
		},
		{
			value: 34,
			colour: 'bg-lime-700'
		}
	];

	const availableClasses = 'bg-white bg-opacity-80';
	const selectedClasses = 'bg-lime-400 bg-opacity-80';
	const unselectedClasses = 'bg-white bg-opacity-30';

	const handleOptionToggle = (value: number) => {
		selectedValue === value ? (selectedValue = null) : (selectedValue = value);
	};

	const handleCancelVote = () => {
		voted = false;
		selectedValue = null;
	};
</script>

<div class="p-3 flex flex-col justify-between h-full">
	<div>
		<div class="flex justify-between items-center mb-3">
			<p class="text-sm text-white opacity-80 text-left">
				Room: #1234<br />Callsign: Cool Hand Clover
			</p>
			<button type="button" class="block p-3 -mr-3 underline text-white text-opacity-80">
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
						d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
					/>
				</svg>
			</button>
		</div>
		<div
			class="block w-full border-0 p-3 bg-white bg-opacity-80 text-black font-medium mix-blend-screen"
		>
			<h1 class="text-2xl">COM-9041</h1>
			<p>
				Contact properties refactor that is going to have a description reaching multiple lines,
				even as many as three.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-3">
		{#each options as option}
			<button
				type="button"
				disabled={voted}
				on:click={() => {
					if (canVote) handleOptionToggle(option.value);
				}}
				class="block w-full border-0 p-3 text-black font-medium text-xl mix-blend-screen {!selectedValue
					? availableClasses
					: option.value === selectedValue
					? selectedClasses
					: unselectedClasses}"
			>
				{option.value}
			</button>
		{/each}
		<div class="col-span-2">
			<p class="text-sm text-white opacity-80">
				Voting is <span
					class="uppercase font-medium text-lime-400"
					class:text-lime-400={canVote}
					class:text-red-400={!canVote}>{canVote ? 'open' : 'closed'}</span
				>
			</p>
			<p class="text-sm text-white opacity-0" class:opacity-80={voted} class:opacity-0={!voted}>
				You have voted. <button
					type="button"
					disabled={!voted}
					on:click={() => handleCancelVote()}
					class="underline">Change your mind?</button
				>
			</p>
		</div>
	</div>
	<div class="h-14">
		{#if voted}
			<div class="flex justify-center items-center h-14">
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
				<p class="text-sm text-white opacity-80 text-left">Waiting for the others</p>
			</div>
		{:else}
			<button
				type="button"
				disabled={selectedValue === null}
				on:click={() => (voted = !voted)}
				class="block w-full border-0 p-3 bg-lime-400 bg-opacity-90 text-black font-medium text-2xl mix-blend-screen"
				class:opacity-30={!selectedValue || voted}
			>
				{#if !selectedValue}Go ahead, punk
				{:else}You sure?
				{/if}
			</button>
		{/if}
	</div>
</div>
