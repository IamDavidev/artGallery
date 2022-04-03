import { useEffect, useState } from 'react';

const useNumRandom = () => {
	const [numR, serNumR] = useState(0);
	const numrandom = () => {
		const num: number = Math.floor(Math.random() * (10 + 1));
		return serNumR(num);
	};

	useEffect(() => {
		numrandom();
	}, []);
	console.log(numR);
	return numR;
};

export default useNumRandom;
