$(document).ready(function() {
	
	var i;
	$("#page1").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page1'));
		click = obj.click;
		click++;
		localStorage.setItem('page1',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page2").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page2'));
		click = obj.click;
		click++;
		localStorage.setItem('page2',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page3").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page3'));
		click = obj.click;
		click++;
		localStorage.setItem('page3',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page4").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page4'));
		click = obj.click;
		click++;
		localStorage.setItem('page4',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page5").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page5'));
		click = obj.click;
		click++;
		localStorage.setItem('page5',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page6").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page6'));
		click = obj.click;
		click++;
		localStorage.setItem('page6',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page7").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page7'));
		click = obj.click;
		click++;
		localStorage.setItem('page7',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page8").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page8'));
		click = obj.click;
		click++;
		localStorage.setItem('page8',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page9").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page9'));
		click = obj.click;
		click++;
		localStorage.setItem('page9',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

	$("#page10").on("click", function(){
		obj = JSON.parse(localStorage.getItem('page10'));
		click = obj.click;
		click++;
		localStorage.setItem('page10',
					JSON.stringify({
						id: obj.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: click }));
	});

});