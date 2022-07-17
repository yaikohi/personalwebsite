import vercel from '@sveltejs/adapter-vercel'
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

	// https://kit.svelte.dev/docs/configuration#alias
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false,
		}),
		alias: {
			$components: resolve('./src/lib/components'),
			$lib: resolve('./src/lib'),
			$store: resolve('./src/lib/store'),
		},
	},
}

export default config
