var postsData = [{
	title: 'The Man Who Was Thursday',
	author: 'G. K. Chesterton',
	url: 'http://en.wikipedia.org/wiki/The_Man_Who_Was_Thursday'
}, {
	title: 'The Screwtape Letters',
	author: 'C. S. Lewis',
	url: 'http://en.wikipedia.org/wiki/The_Screwtape_Letters'
}, {
	title: 'The Lord of the Rings',
	author: 'J. R. R. Tolkien',
	url: 'http://en.wikipedia.org/wiki/The_Lord_of_the_Rings'
}];
Template.postsList.helpers({
	posts: postsData
});