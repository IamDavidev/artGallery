import { FC } from 'react';
import useApi from '../../lib/hooks/useApi';

const TopicPhotos: FC = () => {
	const topics = useApi({
		enpoint: 'topics/',
		per_page: 10,
	});
	return (
		<div>
			<h1>topicPhotos</h1>
		</div>
	);
};
export default TopicPhotos;
