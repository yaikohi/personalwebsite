export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","fonts/FiraCode-Bold.woff2","fonts/FiraCode-Light.woff2","fonts/FiraCode-Medium.woff2","fonts/FiraCode-Regular.woff2","fonts/FiraCode-SemiBold.woff2","fonts/FiraCode-VF.woff2","fonts/PTSans-Bold.woff2","fonts/PTSans-BoldItalic.woff2","fonts/PTSans-Italic.woff2","fonts/PTSans-Regular.woff2","fonts/SourceSansPro-Black.woff2","fonts/SourceSansPro-BlackItalic.woff2","fonts/SourceSansPro-Bold.woff2","fonts/SourceSansPro-BoldItalic.woff2","fonts/SourceSansPro-ExtraLight.woff2","fonts/SourceSansPro-ExtraLightItalic.woff2","fonts/SourceSansPro-Italic.woff2","fonts/SourceSansPro-Light.woff2","fonts/SourceSansPro-LightItalic.woff2","fonts/SourceSansPro-Regular.woff2","fonts/SourceSansPro-SemiBold.woff2","fonts/SourceSansPro-SemiBoldItalic.woff2","images/me_irl.jpg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"immutable/start-24894332.js","imports":["immutable/start-24894332.js","immutable/chunks/index-52106939.js","immutable/chunks/index-093dd6ce.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/posts.json",
				pattern: /^\/api\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/posts.json.ts.js')
			},
			{
				type: 'page',
				id: "blog/1",
				pattern: /^\/blog\/1\/?$/,
				names: [],
				types: [],
				path: "/blog/1",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/2",
				pattern: /^\/blog\/2\/?$/,
				names: [],
				types: [],
				path: "/blog/2",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/3",
				pattern: /^\/blog\/3\/?$/,
				names: [],
				types: [],
				path: "/blog/3",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
