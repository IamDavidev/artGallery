import BoxBoard from '../../components/boxBoard';

const Boards = () => {
	return (
		<div>
			<BoxBoard collection='natural' />
			<BoxBoard collection='noche' />
			<BoxBoard collection='tecnologia' />
			<BoxBoard collection='typography' />
			<BoxBoard collection='dibujo' />
		</div>
	);
};
export default Boards;
