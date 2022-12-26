//set up the http Request 
//create an object of xhr 
let xhr=new XMLHttpRequest();

// configure the object with request
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
//setup our listeners to process the completed request 
xhr.onload=function(){
//Process the data only if status code is 200 to <300 
if(xhr.status>=200&&xhr.status<300){
    //runs when request is successful 
    let jsonobj=JSON.parse(this.response);  //Parse the response
    console.log(jsonobj);
    for(let i=0;i<jsonobj.length;i++){
    console.log(`
    ID:${jsonobj[i].id}
    Title:${jsonobj[i].name}
    Email:${jsonobj[i].email}
    `);
    }
  
    for(let i=0; i<jsonobj.length; i++) {
        let address=jsonobj[i].address
        console.log(address)
    }
  
}else{
    //Runs the error message to user 
    console.log("Data is not available")
}

}

//send method to make request 
xhr.send();