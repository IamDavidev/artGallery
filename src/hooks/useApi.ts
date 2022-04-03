import { useCallback, useEffect, useState } from 'react';
import { API_UNSPLASH, KEY_API } from '../services/apiUnsplash';

interface propsUseApi {
	enpoint: string;
	query?: string;
	per_page?: number;
}

// checar type data;
interface returnUseApi {
	data: any;
	loading: boolean;
	err: {};
}

const useApi = ({
	enpoint,
	query,
	per_page = 3,
}: propsUseApi): returnUseApi => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState({
		status: false,
		message: '',
	});

	const getDataApi = useCallback(
		async ({ query, enpoint, per_page }: propsUseApi) => {
			try {
				const res = await API_UNSPLASH.get(`${enpoint}`, {
					params: {
						query, // = query : query
						client_id: KEY_API,
						per_page,
					},
				}).then((res: any) => {
					return res.data;
				});
				setData(res);
				setLoading(false);
			} catch (e) {
				console.error(e);
				setErr({
					status: true,
					message: 'hay un error',
				});
			}
		},
		[enpoint, query]
	);

	useEffect(() => {
		getDataApi({ query, enpoint, per_page });
	}, [enpoint, query]);

	return {
		data,
		loading,
		err,
	};
};

export default useApi;
