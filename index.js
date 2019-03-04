const imageSearch = require('image-search-google');
const client = new imageSearch('012083763351849494459:xjwuixt7smu', 'AIzaSyBAKRkaJzvW-gPoh6f1HODcIh_Z0meFTjs');

function start() {
	
	const content = {
	 	searchTerm: "Banana",
		prefix: "3 Dicas Sobre",
	 	sentences: [
	   	{
	   		text: "Tem mais de 100 tipos de bananas",
	   		keywords: ["tipos de bananas"],
	   		images: ["..."]
	   	},
	   	{
	   		text: "banana é rica em potassio",
	   		keywords: ["potacio"],
	   		images: ["..."]
	   	},
	    	{
	   		text: "banana ajuda na caganeira",
	   		keywords: ["caganeira"],
	   		images: ["..."]
	    	}
	  	]
	}
	client.search('Mahatma Gandhi', {size: 'large'});
	 
	console.log ("nao");
	// search for certain size

	console.log ('fim');
}

start()