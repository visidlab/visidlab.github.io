// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config/site.ts';

if (siteConfig.siteUrl === 'https://your-domain.com') {
	console.warn(
		'[maria-theme] siteConfig.siteUrl is still set to the placeholder value. Update it before publishing so canonical URLs and the sitemap are correct.'
	);
}

// https://astro.build/config
export default defineConfig({
	site: siteConfig.siteUrl,
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
