<script lang="ts">
	import '../app.css'
	import Navbar from '../lib/components/Navbar.svelte'

	let dark = true
</script>

<div class:dark class="min-h-screen bg-white dark:bg-slate-900">
	<div class="absolute inset-0 z-0 h-screen w-screen bg-white dark:bg-slate-900" />

	<div class=" relative z-20 mx-auto h-full bg-white  dark:bg-slate-900 dark:text-white lg:px-2">
		<Navbar bind:dark />
		<main>
			<slot />
		</main>
	</div>
</div>
