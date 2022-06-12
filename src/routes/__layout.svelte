<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let dark = true;
</script>

<div class:dark class="bg-white dark:bg-black">
	<div class="mx-auto h-screen bg-white dark:bg-black dark:text-white lg:px-2">
		<Navbar bind:dark />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
