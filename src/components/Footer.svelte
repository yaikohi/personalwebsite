<script lang="ts">
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="lg:bt-18 t-12 bg-white py-6 dark:bg-black sm:py-12 sm:pb-36">
	<div class=" mx-auto max-w-4xl px-4 text-slate-800 dark:text-white">
		<div
			class="dark:bg-slate-200 bg-slate-200 pt-[3px] z-0 delay-200 rounded-t-[80px_2px] transition-color ease-in-out "
		>
			<div
				class="pt-2 flex flex-col items-center z-20 bg-white dark:bg-black justify-between lg:flex-row"
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
