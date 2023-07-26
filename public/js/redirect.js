const redirect = () =>  location.href = "http://localhost:3000/login"; 

document.querySelector("[data-id='discord_identify']").addEventListener("click", redirect); 
