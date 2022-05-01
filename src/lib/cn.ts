interface Params {
	block?: string;
	element?: string;
	modifiers?: Record<string, unknown>;
}

export const cn = ({ block = '', element = '', modifiers = {} }: Params): string => {
	const blockClassName = element ? `${block}__${element}` : block;

	const mods = Object.entries(modifiers).filter(
		(value) => value[1] !== undefined && value[1] !== null && value[1] !== '' && value[1] !== false
	);

	return [
		...[blockClassName],
		mods.map((value) => `${blockClassName}--${value[0]}`).join(' ')
	].join(' ');
};
