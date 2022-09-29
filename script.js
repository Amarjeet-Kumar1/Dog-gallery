
var breed, subBreed;
var allowSubmit = true;


    $.ajax({
        url : 'https://dog.ceo/api/breeds/list/all',
        method : 'GET',
        success : function(response){
            var breedName = response.message;
            $.each( breedName, function( key, value ) {
                $('#select').append('<option value =  '+key+' >'+key+'</option>');
                
            });
            
        }
    });

    $('#select').change(function () { 
        $('#s-select').remove();
        
        var cBreed = $('#select').val();
        
        var curl = 'https://dog.ceo/api/breed/'+cBreed+'/list';
        $.get(curl,
            function (data) {
                
                if(data.message.length){
                    
                    
                    $('#select').after('<select name="s-select" id="s-select" style="width: 20%;"></select>');
                    $.each(data.message, function(index, value){
                        
                        $('#s-select').append('<option value =  '+value+' >'+value+'</option>');
                    });
                }
            });

        
    });
   
    

function randomDog(breed, subBreed){
    $('#lower img').remove();
    var rurl;
    if(subBreed === undefined){
         rurl = "https://dog.ceo/api/breed/"+breed+"/images";
    } else{
         rurl = "https://dog.ceo/api/breed/"+breed+"/"+subBreed+"/images";
        
    }
    
   
$.ajax({
    url : rurl,
    method : 'GET',
    success : function(response){
        var imageUrl = response.message;
        $.each(imageUrl, function(index, value){
            $('#lower').append('<img src = "'+value+'" height = "200px" >');
        });
        
    }

});
}

$('#upper button').click(function(e){
    e.preventDefault();
    if(allowSubmit){
       breed = $('#select').val();
       subBreed = $('#s-select').val();
       
       randomDog(breed, subBreed);
       
    }
});









