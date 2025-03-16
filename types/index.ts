export type IShot = {
	imageUrl: string;
	title: string;
	author: {
		name: string;
		avatar: string;
	};
	stats: {
		likes: number;
		views: number;
		comments: number;
	};
};
