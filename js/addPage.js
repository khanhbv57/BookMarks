$(document).ready(function(){
	//localStorage.clear();
	var noImage = "http://www.novelupdates.com/img/noimagefound.jpg";
	var i;
	
		
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

	$("#add-new").on("click", function(){
			$("#myModal").modal('show');
			document.getElementById("Idpage").value=localStorage.length+1;
		});
			
	document.getElementById("IdFileImage").addEventListener("change", readFile, false);

		$("#save").on("click", function(){
			var id = document.getElementById("Idpage").value;
			var title = document.getElementById("IdTitle").value;
			var image = document.getElementById("IdImage").value;
			var url = document.getElementById("IdUrl").value;
			var fileImage = document.getElementById("b64").value;
			
			if(fileImage != ""){
				image = fileImage;
			}

			if(image == ""){
				image = noImage;
			}

			if(url == ""){
				bootbox.alert({
			    message: "Bạn chưa nhập url!",
			    backdrop: true

				});
			}else{
			
				localStorage.setItem('page'+id,
					JSON.stringify({
						id: id, title: title,
						 url: url, image: image,
						  click: 0}));
				window.location.reload();
			}

	});
	});