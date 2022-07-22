const list=document.querySelectorAll('.list');
function activelink() {
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');

    
}
list.forEach((item) => 
    item.addEventListener('click',activelink));

    

setInterval(() => {
    

let a= new Date();


document.getElementById('time').innerHTML="❣ "+a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()+ " ❤ " +a.toLocaleDateString(undefined,{weekday:'long'})+"❣";
// document.getElementById('day').innerHTML=a.toLocaleDateString(undefined,{weekday:'long'});
}, 1000);

function cl(){
    window.open('https://www.youtube.com/channel/UC-SmohVMvfTXWRDGXKCSZjg');
     
    
} 
