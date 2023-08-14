<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import ContinueButton from '$components/ButtonInlineContinue.svelte';
	import type { AuthOtpResponse } from '@supabase/supabase-js';

	export let data;

	let email = '';

	async function signInWithEmail() {
		const response: AuthOtpResponse = await data.supabase.auth.signInWithOtp({
			email: email,
			options: { emailRedirectTo: `${data.url}/auth/callback`}
		});
		console.log(response)
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="p-3 flex flex-col justify-center h-full w-full max-w-md mx-auto">
	<div class="w-full">
		<div class="flex items-end">
			<label class="block w-full text-lg text-white text-opacity-80">
				Sign in with a link sent to your email:
				<input
					type="email"
					class="block w-full h-14 mt-2 p-3 bg-white bg-opacity-80 text-sky-900 outline-none font-medium text-lg"
					placeholder="e.g. name@company.com"
					bind:value={email}
				/>
			</label>
			<ContinueButton disabled={email.length < 6} on:click={() => signInWithEmail()} />
		</div>
		<p
			class="mt-1 text-left text-xs text-white text-opacity-80"
			class:opacity-0={email.length >= 6}
		>
			Min 6 characters
		</p>
	</div>
</div>

<!-- <div class="flex justify-center p-4">
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{
				extend: false,
				className: {
					container: 'mx-auto',
					label: 'block w-full text-sm text-white text-opacity-80',
					input: 'block w-full h-14 mt-2 p-3 bg-white bg-opacity-80 text-sky-900 outline-none font-medium text-lg',
					button: 'block h-14 !border-0 p-3 bg-lime-400 bg-opacity-90 text-black text-center font-medium text-2xl mix-blend-screen rounded-none',
				},
			}}
			additionalData={{}}
		/>
</div> -->

<!-- const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{
      // If you want to extend the default styles instead of overriding it, set this to true
      extend: false,
      // Your custom classes
      className: {
        anchor: 'my-awesome-anchor',
        button: 'my-awesome-button',
        //..
      },
    }}
  />
) -->
