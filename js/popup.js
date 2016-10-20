$(document).ready(function(){

function onPageDetailsReceived(pageDetails)  { 
    document.getElementById('IdTitle').value = pageDetails.IdTitle; 
    document.getElementById('IdUrl').value = pageDetails.IdUrl;  
} 

window.addEventListener('load', function(evt) {
    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});

		function readFile()
		{
				if(this.files && this.files[0])
				{
				    var FR= new FileReader();
				    FR.onload = function(e)
				    {
				    	document.getElementById("img").src = e.target.result;
				    	document.getElementById("b64").value = e.target.result;
				    };       
				    	FR.readAsDataURL( this.files[0] );

				}
		}

		document.getElementById("Idpage").value=localStorage.length+1;		
		document.getElementById("IdFileImage").addEventListener("change", readFile, false);

		var noImage = "http://www.novelupdates.com/img/noimagefound.jpg";
			$("#btn-save").on("click", function(){
				var id = document.getElementById("Idpage").value;
				var title = document.getElementById("IdTitle").value;
				var image = document.getElementById("IdImage").value;
				var url = document.getElementById("IdUrl").value;
				var fileImage = document.getElementById("b64").value;
				if(image == ""){
					image = noImage;
				}
				var length_arr = localStorage.length+1;
				localStorage.setItem('page'+id,JSON.stringify({id: id, title: title, url: url, image: image, fileImage: fileImage}));
				window.close();

		});
	});