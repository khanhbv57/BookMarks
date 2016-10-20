$(document).ready(function() {
	if(localStorage.length>0){
		for(i=1; i<=localStorage.length; i++)
		{			
			var pagei="page"+i;
			if (localStorage.getItem(pagei) == null)
			{
				j=i+1;
				var pagej="page"+j;
				obj = JSON.parse(localStorage.getItem(pagej));
				var getIdpage = obj.id;
					getIdpage--;
				localStorage.setItem(pagei,
					JSON.stringify({id: getIdpage,
					 title: obj.title, url: obj.url,
					  image: obj.image, click: obj.click}));
				localStorage.removeItem(pagej);
				window.location.reload();	
			}
		}
	}

	var j;
	for(i=1; i<localStorage.length; i++){
		for(j=i+1; j<=localStorage.length; j++){
			pagei = "page"+i;
			pagej = "page"+j;
			obi = JSON.parse(localStorage.getItem(pagei));
			obj = JSON.parse(localStorage.getItem(pagej));
			clicki = obi.click;
			clickj = obj.click;
			if(clicki < clickj){
				title = obi.title;
				url = obi.url;
				image = obi.image;
				click = obi.click;
				localStorage.setItem(pagei,
					JSON.stringify({
						id: obi.id, title: obj.title,
						 url: obj.url, image: obj.image,
						  click: obj.click }));
				localStorage.setItem(pagej,
					JSON.stringify({
						id: obj.id, title: title,
						 url: url, image: image,
						  click: click }));
			}
		}
	}
		/*window.location.reload();*/

	html="";
	if (localStorage.length>0)
	{
	for(i=1; i<=localStorage.length; i++)
		{

			obj = JSON.parse(
				localStorage.getItem('page'+i));
			html += "<div id='page"+obj.id+
			"'><a href='" + 
				obj.url + "'><img src='" + 
					obj.image+"'></a><div id='title'>"
						+obj.title+"</div></div>";			
		}
	}
		
	if(localStorage.length <10){
		html+="<div id='add-button'>"+
		"<img id='add-new' src='images/create.png' >"
		+"</div>";
	}
	$('#content').html(html);

});