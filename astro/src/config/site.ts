export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

export const siteConfig: SiteConfig = {
	name: 'VID Lab',
	title: 'VID Lab | Visualization and Interaction Design | Linköping University',
	description: 'We explore new ways for people to interact with data, technology, and digital materials in meaningful ways.',
	siteUrl: 'https://visidlab.github.io',
	email: '',
	locale: 'en-US',
	authorName: 'VID Lab',
	authorRole: 'Research Lab',
	keywords: [
		'data visualization',
		'interaction design',
		'research lab',
		'Linköping University',
		'visualization collective',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/people', label: 'People' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/news', label: 'News' },
	],
	extraPages: [],
	legalLinks: [],
	socialLinks: [
		{ href: 'https://github.com/visidlab', label: 'GitHub' },
	],
};
