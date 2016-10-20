$(function () {
    $.contextMenu({
        selector: '#page1',
        build: function (e) {
            return {
                callback: function (key, options) {
                    if(key == 'delete'){
                        localStorage.removeItem('page1');
                        localStorage.removeItem('clickPage1');
                        window.location.reload();
                    }
                    if(key == 'edit'){
                        $("#myModal").modal({
                            show: false,
                            keyboard: 'static',
                            backdrop: true
                        });
                        $("#myModal").modal('show');
                        obj = JSON.parse(localStorage.getItem('page1'));
                        document.getElementById("Idpage").value = obj.id;
                        document.getElementById("IdTitle").value = obj.title;
                        document.getElementById("IdUrl").value = obj.url;
                        if(obj.image != ""){
                            document.getElementById("IdImage").value = obj.image;
                            document.getElementById("img").src = obj.image;
                        }else{
                            document.getElementById("b64").value = obj.fileImage;
                            document.getElementById("img").src = obj.fileImage;
                        }


                    }
                  
                },
                items: items
            };
        }
    });
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        },

        "naddgroup":{
            name: "add group",
            icon: "add"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page2',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page2');
                    localStorage.removeItem('clickPage2');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page2'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page3',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page3');
                    localStorage.removeItem('clickPage3');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page3'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});

    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page4',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page4');
                    localStorage.removeItem('clickPage4');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page4'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function(){
$.contextMenu({
    selector: '#page5',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page5');
                    localStorage.removeItem('clickPage5');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page5'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});

    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };

});

$(function () {
$.contextMenu({
    selector: '#page6',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page6');
                    localStorage.removeItem('clickPage6');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page6'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page7',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page7');
                    localStorage.removeItem('clickPage7');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page7'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page8',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page8');
                    localStorage.removeItem('clickPage8');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page8'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});

$(function () {
$.contextMenu({
    selector: '#page9',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page9');
                    localStorage.removeItem('clickPage9');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page9'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});
$(function () {
$.contextMenu({
    selector: '#page10',
    build: function (e) {
        return {
            callback: function (key, options) {
                if(key == 'delete'){
                    localStorage.removeItem('page10');
                    localStorage.removeItem('clickPage10');
                    window.location.reload();
                }
                if(key == 'edit'){
                    $("#myModal").modal({
                        show: false,
                        keyboard: 'static',
                        backdrop: true
                    });
                    $("#myModal").modal('show');
                    obj = JSON.parse(localStorage.getItem('page10'));
                    document.getElementById("Idpage").value = obj.id;
                    document.getElementById("IdTitle").value = obj.title;
                    document.getElementById("IdUrl").value = obj.url;
                    if(obj.image != ""){
                        document.getElementById("IdImage").value = obj.image;
                        document.getElementById("img").src = obj.image;
                    }else{
                        document.getElementById("b64").value = obj.fileImage;
                        document.getElementById("img").src = obj.fileImage;
                    }
                    

                }
              
            },
            items: items
        };
    }
});
    var items = {
        "edit": {
            name: "Edit",
            icon: "edit"
        },

        "delete": {
            name: "Delete",
            icon: "delete"
        }
        
    };
   
});