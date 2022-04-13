export interface propsData {
	query?: string;
	enpoint: string;
	per_page: number;
	count?: number;
	setData: Function;
	setLoading: Function;
	setErr: Function;
}

export interface CollectionPhotosType {
	id: string;
	preview_photos: Array<PhotoTypes>;
	title: string;
}

export interface PhotoTypes {
	id: string;
	urls: {
		regular?: string;
		small?: string;
	};
	alt_description?: string;
	user: {
		first_name?: string;
		last_name?: string;
	};
}

export interface InfoPhotoType {
	width: number;
	height: number;
	createdAt: string;
	likes: string;
	views: string;
	contain: boolean;
	description: string;
	user: {
		name: string;
		username: string;
		profile_image: {
			small: string;
		};
	};
}

export interface propsErr {
	msg: string;
}
