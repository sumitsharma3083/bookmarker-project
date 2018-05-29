 
function myfun()
{
    var sitename = document.getElementById('mysite');
    var url =document.getElementById('myurl');
    var resultlist = document.getElementById('result');
    
    if(sitename.value== '' || url.value == '')
        {
            alert('The Input Fields Cant be Empty');
        }
    else if(url.value != 'http://'+sitename.value)
        {
            alert('Url should be legal');
        }
    else{
         var info= 
             {
            "site" :sitename.value,
            "url"  : url.value
             }
           
           if(localStorage.getItem('bookmarks')=== null)
            {
                  var bookmarklist = [];
                  var id=[0];
                 
                bookmarklist.push(info);
             localStorage.setItem('bookmarks',JSON.stringify(bookmarklist));
        localStorage.setItem('id',JSON.stringify(id));
         console.log(JSON.parse(localStorage.getItem('id')));
            }
        else
            {
        var    mybook=JSON.parse(localStorage.getItem('bookmarks'));
        mybook.push(info);
        
         var id=JSON.parse(localStorage.getItem('id'))
         
         id.push(id.length);
      localStorage.setItem('bookmarks',JSON.stringify(mybook));
   localStorage.setItem('id',JSON.stringify(id));
               
            }
        }
   
}

function showbook()
 {
        var mylist =JSON.parse(localStorage.getItem('bookmarks')); 
      var id2=JSON.parse(localStorage.getItem('id')); 
var resultdiv=document.getElementById('result');
    resultdiv.innerHTML = '';
    for(var i=0 ; i<mylist.length ; i++)
        {
     resultdiv.innerHTML += "<div id="+id2[i]+"><h2 class=head2>"+mylist[i].site+"</h2><span>"+mylist[i].url+"</span><button class=mybtn id="+id2[i]+">Delete</button><a href="+mylist[i].url+" target=_blank>Visit</a></div>";
         
        }
     
     
       
     $('.mybtn').click(function(){
         
         $('#'+$(this).attr('id')).fadeOut(1000);
         
         var value = $(this).attr('id');
       var mybook = JSON.parse(localStorage.getItem('bookmarks'));
        var myid= JSON.parse(localStorage.getItem('id'));
          
        mybook.splice(value,1); 
        myid.splice(value,1);
          for(var i= value; i <myid.length ; i++)
              {
                myid[i] -= 1;
              }
      
 localStorage.setItem('bookmarks',JSON.stringify(mybook));
 localStorage.setItem('id',JSON.stringify(myid));
     });
          
  } 


  

    

 
         