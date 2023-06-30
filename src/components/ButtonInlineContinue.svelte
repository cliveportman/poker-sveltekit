<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let disabled = false;

	import RightArrow from '$components/svgs/RightArrow.svelte';
</script>

<button
	type="submit"
	{disabled}
	on:click={() => dispatch('click')}
	class="block w-16 h-14 border-0 p-3 bg-lime-400 bg-opacity-90 text-black text-center font-medium text-2xl mix-blend-screen"
	class:opacity-30={disabled}><RightArrow /></button
>
