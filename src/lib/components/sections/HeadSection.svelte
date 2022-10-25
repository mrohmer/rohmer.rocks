<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { SocialLink } from '$lib/models/social-link';

	export let socialLinks: SocialLink[];
</script>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<div>
		<h1 class="text-5xl mb-1 font-light">
			M<span class="text-zinc-700">atthias</span>
			R<span class="text-zinc-700">ohmer</span>
		</h1>
		<p class="font-extralight mb-3 text-xl text-zinc-500">Full Stack Web Developer</p>
		<div class="flex justify-center">
			{#each socialLinks as { href, title, icon, color }}
				<a
					{href}
					{title}
					class="block p-2 transition-opacity opacity-70 hover:opacity-100"
					style="color: {color}"
				>
					<Icon {icon} />
				</a>
			{/each}
		</div>
	</div>
</section>
