<script lang="ts">
	import FooterLink from './FooterLink.svelte'
</script>

<footer class="lg:bt-18 bg-white py-6 dark:bg-slate-900 sm:py-12 sm:pb-36">
	<div class=" mx-auto max-w-4xl px-4 text-slate-800 dark:text-white">
		<div
			class="transition-color z-0 bg-slate-200 pt-[3px] delay-200 ease-in-out dark:bg-slate-200 "
		/>
		<div class="z-20 items-center justify-between bg-white pt-2 dark:bg-slate-900 lg:flex-row">
			<div class="flex flex-col font-medium z-60">
				<FooterLink linksTo="https://twitter.com/hhhghq0">Twitter</FooterLink>
				<FooterLink linksTo="https://www.linkedin.com/in/erik-beem/">Linkedin</FooterLink>
				<FooterLink linksTo="https://github.com/yaikohi">GitHub</FooterLink>
			</div>
		</div>
	</div>
</footer>
