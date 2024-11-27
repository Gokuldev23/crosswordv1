import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';


export default defineConfig({
	server: {
		port:5000,
		host:'0.0.0.0'
	  },
	plugins: [
		enhancedImages(),
		sveltekit()
	]
});
