<script lang="ts">
	import { goto } from '$app/navigation';
	import ContinueButton from '$components/ButtonInlineContinue.svelte';

	let roomNumber = '',
		callSign = '';
	let step = 1;

	const handleContinue = () => {
		switch (step) {
			case 1:
				if (validateStep1()) step = 2;
				break;
			case 2:
				if (validateStep2()) goto('vote');
				break;
		}
	};

	const validateStep1 = () => {
		if (roomNumber.length < 4) return false;
		return true;
	};

	const validateStep2 = () => {
		if (callSign.length < 4) return false;
		return true;
	};
</script>

<div class="p-3 flex flex-col justify-center h-full w-full max-w-md mx-auto">
	<div class="w-full">
		{#if step === 1}
			<div class="flex items-end">
				<label class="block w-full text-lg text-white text-opacity-80">
					What's your room number
					<input
						type="number"
						class="block w-full h-14 mt-2 p-3 bg-white bg-opacity-80 text-sky-900 outline-none font-medium text-lg"
						placeholder="e.g. 123456"
						bind:value={roomNumber}
					/>
				</label>
				<ContinueButton
					disabled={step == 1 && roomNumber.length < 6}
					on:click={() => handleContinue()}
				/>
			</div>
			<p
				class="mt-1 text-left text-xs text-white text-opacity-80"
				class:opacity-0={step == 1 && roomNumber.length >= 6}
			>
				Min 6 characters
			</p>
		{/if}
		{#if step === 2}
			<div class="flex items-end">
				<label class="block w-full text-lg text-white text-opacity-80">
					What shall we call you?
					<input
						type="text"
						class="block w-full h-14 mt-2 p-3 bg-white bg-opacity-80 text-sky-900 outline-none font-medium text-lg"
						placeholder="e.g. Punk"
						bind:value={callSign}
					/>
				</label>
				<ContinueButton
					disabled={step == 2 && callSign.length < 4}
					on:click={() => handleContinue()}
				/>
			</div>
			<p
				class="mt-1 text-left text-xs text-white text-opacity-80"
				class:opacity-0={step == 2 && callSign.length >= 4}
			>
				Min 6 characters
			</p>
		{/if}
	</div>
</div>
