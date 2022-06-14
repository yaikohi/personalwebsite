import { writable } from 'svelte/store';

export const dogs = writable([]);

export const fetchDogImages = async () => {
	const URL = 'https://dog.ceo/api/breed/leonberg/images/';
	const response = await fetch(URL);
	const data = await response.json();

	dogs.set(data.message);
};

fetchDogImages();
