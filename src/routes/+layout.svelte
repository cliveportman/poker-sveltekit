<script>
	import '../tailwind.css';
</script>

<div class="h-full w-full flex flex-col mx-auto">
	<div
		class="h-full flex flex-col justify-between bg-cover bg-[url('/img/mountains-1.jpg')] bg-sky-800 bg-blend-multiply"
	>
		<slot />
	</div>
</div>
