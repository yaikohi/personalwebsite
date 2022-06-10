<script lang="ts">
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="lg:bt-18 t-12 bg-white py-6 dark:bg-black sm:py-12 sm:pb-36">
	<div class="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
		<div class="mb-2 border-t-2 border-gray-300 pb-8 dark:border-purple-200" />
		<div class="flex flex-col items-center justify-between lg:flex-row">
			<div class="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
				<FooterLink linksTo="https://twitter.com/hhhghq0">Twitter</FooterLink>
				<FooterLink linksTo="https://www.linkedin.com/in/erik-beem/">Linkedin</FooterLink>
				<FooterLink linksTo="https://Github.com/yaikohi">GitHub</FooterLink>
			</div>
		</div>
	</div>
</footer>
