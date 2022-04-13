import { useEffect, useState } from 'react';

import { getDataApi } from '../data/getDataApi';

interface propsUseApi {
	enpoint: string;
	query?: string;
	per_page?: number;
	count?: number;
}

// checar type data;
interface returnUseApi {
	data: any;
	loading: boolean;
	err: {
		status: boolean;
		message: string;
	};
}

const useApi = ({
	enpoint,
	query,
	per_page = 3,
	count,
}: propsUseApi): returnUseApi => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState({
		status: false,
		message: '',
	});

	useEffect(() => {
		getDataApi({
			query,
			enpoint,
			per_page,
			count,
			setData,
			setLoading,
			setErr,
		});
	}, [enpoint, query, per_page, count]);

	return {
		data,
		loading,
		err,
	};
};

export default useApi;
