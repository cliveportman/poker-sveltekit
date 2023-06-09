<script>
	import '../tailwind.css';
</script>

<div class="h-screen max-w-sm w-full flex flex-col mx-auto p-6">
	<div
		class="h-full flex flex-col justify-between bg-cover bg-[url('/img/mountains-1.jpg')] bg-sky-800 bg-blend-multiply"
	>
		<slot />
	</div>
</div>
