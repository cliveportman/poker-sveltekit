<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text: string = 'Submit';
	export let bgColour: string = 'bg-white',
		textColour: string = 'text-sky-700';
	export let selected: boolean, muted: boolean;
</script>

<button
	class="block border-0 p-3 opacity-80 {selected
		? `${bgColour} text-sky-700`
		: `bg-sky-800 ${textColour}`}"
	on:click={() => dispatch('click')}
>
	<div class="flex flex-col items-center">
		{text}
		<slot name="svg" />
	</div>
</button>
