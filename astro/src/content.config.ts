import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coerce empty YAML values (parsed as {}) to undefined
const loosyString = z.union([z.string(), z.null(), z.record(z.any()), z.number()])
  .optional()
  .transform(v => (typeof v === 'string' ? v : undefined));

const people = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
	schema: z.object({
		first_name: z.string(),
		last_name: z.string(),
		key: loosyString,
		role: z.string().default('phdstudent'),
		title: loosyString,
		email: loosyString,
		'personal-site': loosyString,
		year_joined: z.number().optional(),
		graduated: loosyString,
		year_left: z.union([z.string(), z.number(), z.null(), z.record(z.any())]).optional().transform(v => (v == null || typeof v === 'object' ? undefined : String(v))),
		gs: loosyString,
		orcid: loosyString,
		keywords: loosyString,
		layout: loosyString,
		permalink: loosyString,
	}),
});

const publications = defineCollection({
	loader: glob({ pattern: '**/[!_]*.md', base: './src/content/publications' }),
	schema: z.object({
		title: z.string(),
		key: loosyString,
		type: loosyString,
		order: loosyString,
		shortname: loosyString,
		image: loosyString,
		image_large: loosyString,
		authors: z.array(z.string()).optional(),
		'journal-short': loosyString,
		year: z.number().optional(),
		bibentry: loosyString,
		bib: z.union([z.record(z.any()), z.null()]).optional().transform(v => v ?? undefined),
		publisherURL: loosyString,
		abstract: loosyString,
		layout: loosyString,
		pdf: loosyString,
		preprint_server: loosyString,
		code: loosyString,
		supplement: loosyString,
		'external-project': loosyString,
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/[!_]*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		'lead-image': z.string().optional(),
		'lead-image-alt-text': z.string().optional(),
		layout: z.string().optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: loosyString,
		eyebrow: loosyString,
		// homepage
		hero_text: loosyString,
		hero_note: loosyString,
		hero_image: loosyString,
		hero_image_alt: loosyString,
		cta_primary_label: loosyString,
		cta_primary_href: loosyString,
		cta_secondary_label: loosyString,
		cta_secondary_href: loosyString,
		// about
		group_photo: loosyString,
		group_photo_alt: loosyString,
		location: loosyString,
		gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
	}),
});

export const collections = { people, publications, news, pages };
