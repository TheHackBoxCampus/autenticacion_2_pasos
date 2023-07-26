let wsPerfil = {
    async getUser() {
        try {
            let uri = "http://localhost:3000/perfil"
            let data = await (await fetch(uri, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json();
            return data;  
        }catch (err){
            throw Error(err)
        }
    }
}

self.addEventListener("message", async (e) => {
    let result = await wsPerfil.getUser(); 
    postMessage(result)
})