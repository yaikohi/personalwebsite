import { writable } from 'svelte/store';

export const posts = writable([{ userId: 0, id: 0, title: 'Loading...', body: 'Loading...' }]);

export const fetchPosts = async () => {
	const URL = 'https://jsonplaceholder.typicode.com/posts';
	const response = await fetch(URL);
	const data = await response.json();

	posts.set(data);
};
fetchPosts();
