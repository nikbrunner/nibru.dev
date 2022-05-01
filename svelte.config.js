import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$lib: path.resolve('./src/lib'),
					$typings: path.resolve('./src/typings'),
					$config: path.resolve('./src/config')
				}
			}
		}
	}
};

export default config;
