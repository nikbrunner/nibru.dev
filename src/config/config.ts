import type { IBreakpoints } from '$typings/Breakpoints';

export interface IConfig {
	siteTitle: string;
	dateFormat: string; // For dayjs
	breakpoints: IBreakpoints;
}

export const config: IConfig = {
	siteTitle: 'nibru.dev',
	dateFormat: 'YY.MM.DD',
	breakpoints: {
		xs: 320,
		s: 414,
		m: 768,
		l: 1024,
		xl: 1280,
		xxl: 1440,
		xxxl: 1920
	}
};
