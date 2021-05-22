//1.create a XHR object
var req= new XMLHttpRequest();
//2.open a connection 
//true is used bcz that should not affect the rest part of the execution of the pgm
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send the connection 
//sending the  request
req.send();
//4. once the data received successfully from the server

//data format which we  receving from the server will be of the String format
// to convert it into a js object we use 
req.onload=function(){
    var data=JSON.parse(this.response);
  //  console.log(data);
  for(var i=0;i<data.length;i++){
      console.log(data[i].name);
      //document.getElementById("id").innerHTML=data[i].name;
  }
}
