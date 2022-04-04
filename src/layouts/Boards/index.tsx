import BoxBoard from '../../components/boxBoard';

const Boards = () => {
	return (
		<div>
			<BoxBoard collection='natural' />
			<BoxBoard collection='noche' />
			<BoxBoard collection='reading' />
			<BoxBoard collection='dibujos' />
			<BoxBoard collection='gatos' />
		</div>
	);
};
export default Boards;
