import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Color = `#${string}`;
export interface SocialLink {
	icon: IconDefinition;
	title: string;
	href: string;
	color: Color;
}
