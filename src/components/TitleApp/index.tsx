const TitleApp = ({ title }: any) => {
	const newTitle = title.split('')[0].toUpperCase() + title.slice(1);

	return <span>{newTitle}</span>;
};
export default TitleApp;
