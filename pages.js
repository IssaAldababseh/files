 //Chapters questions numbers
  if (location.hash == '#Chapter1') {
              document.getElementsByClassName("question1")[0].innerHTML=document.getElementsByClassName("question1c")[0].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
    hrefnext="#Chapter2"




  }else if (location.hash == '#Chapter2') {
              document.getElementsByClassName("question2")[0].innerHTML=document.getElementsByClassName("question2c")[0].innerHTML; 

      document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
    
            document.getElementsByClassName("nexthref")[2].onClick="location.href='#Chapter3'"



  }
  
//Chapter1
  if (location.hash == '#Chapter1#question1'){
    
          document.getElementsByClassName("question1")[0].innerHTML=document.getElementsByClassName("question1c")[0].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;

  
  }else if (location.hash == '#Chapter1#question2'){
          document.getElementsByClassName("question1")[1].innerHTML=document.getElementsByClassName("question1c")[1].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
  
  }else if (location.hash == '#Chapter1#question3'){
          document.getElementsByClassName("question1")[2].innerHTML=document.getElementsByClassName("question1c")[2].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
  
  }else if (location.hash == '#Chapter1#question4'){
          document.getElementsByClassName("question1")[3].innerHTML=document.getElementsByClassName("question1c")[3].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
  
  }else if (location.hash == '#Chapter1#question5'){
          document.getElementsByClassName("question1")[4].innerHTML=document.getElementsByClassName("question1c")[4].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
  
  }else if (location.hash == '#Chapter1#question6'){
          document.getElementsByClassName("question1")[5].innerHTML=document.getElementsByClassName("question1c")[5].innerHTML; 
          document.getElementById('chapter1n').outerHTML=document.getElementsByClassName("chapternc")[0].innerHTML;
  
  }
  
  //Chapter2
  if (location.hash == '#Chapter2#question1'){
    
          document.getElementsByClassName("question2")[0].innerHTML=document.getElementsByClassName("question2c")[0].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;

  
  }else if (location.hash == '#Chapter2#question2'){
          document.getElementsByClassName("question2")[1].innerHTML=document.getElementsByClassName("question2c")[1].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
  
  }else if (location.hash == '#Chapter2#question3'){
          document.getElementsByClassName("question2")[2].innerHTML=document.getElementsByClassName("question2c")[2].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
  
  }else if (location.hash == '#Chapter2#question4'){
          document.getElementsByClassName("question2")[3].innerHTML=document.getElementsByClassName("question2c")[3].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
  
  }else if (location.hash == '#Chapter2#question5'){
          document.getElementsByClassName("question2")[4].innerHTML=document.getElementsByClassName("question2c")[4].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
  
  }else if (location.hash == '#Chapter2#question6'){
          document.getElementsByClassName("question2")[5].innerHTML=document.getElementsByClassName("question2c")[5].innerHTML; 
          document.getElementById('chapter2n').outerHTML=document.getElementsByClassName("chapternc")[1].innerHTML;
  
  }
  
  
//chapter1
   document.getElementsByClassName("question1c")[0].innerHTML="";
   document.getElementsByClassName("question1c")[1].innerHTML="";
 document.getElementsByClassName("question1c")[2].innerHTML="";
   document.getElementsByClassName("question1c")[3].innerHTML="";
     document.getElementsByClassName("question1c")[4].innerHTML="";
       document.getElementsByClassName("question1c")[5].innerHTML="";



//chapter2
     document.getElementsByClassName("question2c")[0].innerHTML="";
   document.getElementsByClassName("question2c")[1].innerHTML="";
 document.getElementsByClassName("question2c")[2].innerHTML="";
     document.getElementsByClassName("question2c")[3].innerHTML="";
     document.getElementsByClassName("question2c")[4].innerHTML="";

 
  
//Chapters questions numbers
     document.getElementsByClassName("chapternc")[0].innerHTML="";
   document.getElementsByClassName("chapternc")[1].innerHTML="";
 document.getElementsByClassName("chapternc")[2].innerHTML="";
 document.getElementsByClassName("chapternc")[3].innerHTML="";
   document.getElementsByClassName("chapternc")[4].innerHTML="";
