<script lang="ts">
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="lg:bt-18 t-12 bg-white py-6 dark:bg-black sm:py-12 sm:pb-36">
	<div class=" mx-auto max-w-4xl px-4 text-slate-800 dark:text-white">
		<div
			class="transition-color z-0 rounded-t-[80px_2px] bg-slate-200 pt-[3px] delay-200 ease-in-out dark:bg-slate-200 "
		>
			<div
				class="z-20 flex flex-col items-center justify-between bg-white pt-2 dark:bg-black lg:flex-row"
			>
				<div class="flex flex-wrap space-x-8 font-medium">
					<FooterLink linksTo="https://twitter.com/hhhghq0">Twitter</FooterLink>
					<FooterLink linksTo="https://www.linkedin.com/in/erik-beem/">Linkedin</FooterLink>
					<FooterLink linksTo="https://Github.com/yaikohi">GitHub</FooterLink>
				</div>
			</div>
		</div>
	</div>
</footer>
