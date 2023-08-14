<script lang="ts">
	import '../tailwind.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="h-full w-full flex flex-col mx-auto">
	<div
		class="h-full flex flex-col justify-between bg-cover bg-center bg-[url('/img/mountains-1.jpg')] bg-sky-800 bg-blend-multiply"
	>
		<slot />
	</div>
</div>
