import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "$cd",
	subtitle: "/kwonhan.log",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/2.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			// 출처
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		// 게시글 오른쪽 사이드바 목차
		enable: true, // Display the table of contents on the right side of the post
		depth: 3, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// 파비콘 커스텀
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	// 네비게이션 바
	links: [
		// LinkPreset.Home,
		// LinkPreset.Archive,
		// LinkPreset.About,
		{
			name: "/벅바",
			url: "/archive/?category=Bug%20Bounty",
		},
		{
			name: "/롸업",
			url: "/archive/?category=CTF%7C%7CWargame",
		},
		{
			name: "/문서",
			url: "/archive/?category=블로그%7C%7C기술문서",
		},
		{
			name: "/논문",
			url: "/archive/?category=논문%7C%7C컨퍼런스",
		},
		{
			name: "/개발",
			url: "/archive/?category=개발",
		},
		{
			name: "/공모",
			url: "/archive/?category=공모전%7C%7C자격증",
		},
		{
			name: "/Archive",
			url: "/archive/",
		},
		{
			name: "/About",
			url: "/about/",
		},
		// {
		// 	name: "/GitHub",
		// 	url: "https://github.com/kw0n1", // Internal links should not include the base path, as it is automatically added
		// 	external: true, // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/mew.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "kwonhan",
	bio: "환영해오 uu",
	links: [
		// {
		// 	// 프로필 칸 아이콘
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		// 	// You will need to install the corresponding icon set if it's not already included
		// 	// `pnpm add @iconify-json/<icon-set-name>`
		// 	url: "https://twitter.com",
		// },
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://store.steampowered.com",
		// },
		{
			name: "",
			icon: "fa6-brands:github",
			url: "https://github.com/kw0n1",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
