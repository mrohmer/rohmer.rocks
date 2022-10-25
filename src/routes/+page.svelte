<script lang="ts">
	import faGithub from '@fortawesome/fontawesome-free-brands/faGithub.js';
	import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram.js';
	import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin.js';
	import HeadSection from '$lib/components/sections/HeadSection.svelte';
	import type { SocialLink } from '../lib/models/social-link';

	const socialLinks: SocialLink[] = [
		{
			icon: faGithub,
			title: 'Github',
			href: 'https://github.com/mrohmer',
			color: '#333'
		},
		{
			icon: faInstagram,
			title: 'Instagram',
			href: 'https://instagram.com/m.rohmer',
			color: '#c13584'
		},
		{
			icon: faLinkedin,
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/matthias-rohmer-8154b8b3/',
			color: '#0077b5'
		}
	];
</script>

<HeadSection {socialLinks} />
