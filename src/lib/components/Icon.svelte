<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let icon: IconDefinition;
	$: viewBox = `0 0 ${icon?.icon[0] ?? 0} ${icon?.icon[1] ?? 0}`;
	$: path = icon?.icon[4] ?? [];
</script>

<svg
	aria-hidden="true"
	class="w-4 h-4 inline-block"
	role="img"
	xmlns="http://www.w3.org/2000/svg"
	{viewBox}
>
	<path fill="currentColor" d={path} />
</svg>
