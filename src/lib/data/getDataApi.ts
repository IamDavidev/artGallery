import { propsData } from '../../types/types';
import { API_UNSPLASH } from '../api/apiUnsplash';
import.meta.env.ACCESS_KEY_API_UNSP;

export const KEY_API = '7DkFiJKBo9_jxN0S1wcn51CtNEv5r4oeeY_o1IXH8oM';

export const getDataApi = async ({
	query,
	enpoint,
	per_page,
	count,
	setData,
	setLoading,
	setErr,
}: propsData) => {
	try {
		const res = await API_UNSPLASH.get(`${enpoint}`, {
			params: {
				query,
				client_id: KEY_API,
				per_page,
				count,
			},
		}).then((res: any) => {
			return res.data;
		});

		setData(res);

		setLoading(false);
		//
	} catch (e) {
		setErr({
			status: true,
			message: 'hay un error',
		});
	}
};
