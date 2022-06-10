<script lang="ts">
	export let linksTo: string;
</script>

<li>
	<a
		href={linksTo}
		class="font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-purple-500 dark:text-white dark:hover:text-purple-500"
	>
		<slot />
	</a>
</li>
