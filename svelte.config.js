import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			typescript: true,
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				/**
				 * Tells mdsvex to use this file as a layout component
				 *  for the files inside the 'routes/blog' folder
				 */
				blog: 'src/routes/blog/_post.svelte',
			},
		}),
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/lib/components'),
					$lib: resolve('./src/lib'),
					$store: resolve('./src/lib/store'),
				},
			},
		},
	},
}

export default config
