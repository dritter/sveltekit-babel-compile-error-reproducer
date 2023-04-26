import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    // svelte-preprocess options @see https://kit.svelte.dev/docs/integrations
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            // No need for babel to resolve modules
            modules: false,
            targets: {
              // ! Very important. Target es6+
              esmodules: true,
            },
          },
        ],
      ],
    },
  }),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
