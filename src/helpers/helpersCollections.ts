export const collectionthemes: Array<string> = [
	'natural',
	'tecnologies',
	'night',
	'dibujo',
	'web',
	'terror',
	'computed',
	'danza',
	'animals',
	'ropa',
	'comida',
];

export const numRandom: number = Math.floor(Math.random() * (10 + 1));

export const randomColllection: string = collectionthemes[numRandom];
