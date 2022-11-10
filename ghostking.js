let r=document.querySelector(".r");
r.addEventListener("click",()=>{
  if(confirm("Are you sure to watch my Resume")==true){
    window.open("doc/Resume.pdf");
  }
});

// let subm=document.querySelector(".sub");
// subm.addEventListener("click",()=>{
//     let inp=document.querySelector("input").value;
//     inp.innerText="";
//     alert('Working.....');
// });