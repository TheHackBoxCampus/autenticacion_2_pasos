const RenderSync = () => {
    const div = document.querySelector("#code"); 
    const ws = new Worker("services/ws.perfil.js"); 
    ws.postMessage({state:true})
    ws.addEventListener("message", r => {
        const data = JSON.stringify(r.data, null, 2); 
        div.innerHTML = data; 
    })
}

RenderSync(); 