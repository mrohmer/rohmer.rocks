<script lang="ts">
	import '../app.pcss';
	import PoweredBy from '@rohmer/svelte-base/PoweredBy.svelte';
	import { dev } from '$app/environment';
	import { PUBLIC_CLOUDFLARE_TOKEN } from '$env/static/public';

	let footerHeight = 200;

	const name = 'Matthias Rohmer';
	const url = 'https://matthias.rohmer.rocks';
	const technologies = ['svelte', 'netlify'];
	const sourceCodeUrl = 'https://github.com/mrohmer/rohmer.rocks';
</script>

<svelte:head>
	{#if !dev && PUBLIC_CLOUDFLARE_TOKEN}
		<script
			defer
			src="https://static.cloudflareinsights.com/beacon.min.js"
			data-cf-beacon={JSON.stringify({ token: PUBLIC_CLOUDFLARE_TOKEN })}
		></script>
	{/if}
</svelte:head>

<div class="z-10 bg-white dark:bg-black pb-2">
	<slot />
</div>

<div style="height: {footerHeight}px" />

<footer
	bind:clientHeight={footerHeight}
	class="fixed bottom-0 left-0 right-0 z-0 flex flex-col-reverse bg-black text-white dark:bg-white dark:text-black"
>
	<div class="-mt-8">
		<PoweredBy {name} {url} {technologies} {sourceCodeUrl} />
	</div>

	<div class="flex justify-center items-center py-5 text-sm text-gray-400">
		<a class="block px-2 py-1 hover:text-white transition-colors" href="/impressum">impressum</a>
		<div class="px-1">|</div>
		<a class="block px-2 py-1 hover:text-white transition-colors" href="/datenschutz">datenschutz</a
		>
	</div>
</footer>
