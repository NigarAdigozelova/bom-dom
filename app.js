// TASK1
// document.getElementById("demo").innerHTML =
// "Current Screen Width: " + window.screen.width;

// document.getElementById("id1").innerHTML =
// "Screen Width: " + screen.width;


// document.getElementById("id2").innerHTML =
// "Available Screen Width: " + screen.availWidth;


// let title=document.getElementById("demo") 
// window.addEventListener("resize",()=>{
//     title.innerHTML=window.screen.width;
// })

// document.getElementById("demo").innerHTML =
// "Page location is " + window.location.href;


// document.getElementById("id1").innerHTML =
// "Page hostname is " + window.location.hostname;

// document.getElementById("id2").innerHTML =
// "Page protocol is " + window.location.protocol;

// document.getElementById("demo").innerHTML =
// "Page path is " + window.location.pathname;
// document.getElementById("demo").innerHTML =
// "Port number is " + window.location.port;

//   location.reload();

  let click=document.getElementById("btn");
  click.addEventListener("click",()=>{
    window.open("https://www.w3schools.com","_blank");
  })
  let close=document.getElementById("btn_close");
  close.addEventListener("click",()=>{
    window.close();
  })
