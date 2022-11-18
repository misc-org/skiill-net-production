import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: null,
            precompress: true,
            strict: true,
        }),

        // paths: {
        //     base: "/tqj25/250026T",
        // },
    },
};
