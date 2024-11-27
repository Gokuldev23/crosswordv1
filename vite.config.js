import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import fs from 'fs'


export default defineConfig({
	server: {
		https: {
		  key: fs.readFileSync('./localhost.key'),
		  cert: fs.readFileSync('./localhost.crt')
		}
	  },
	plugins: [
		enhancedImages(),
		sveltekit()
	]
});
