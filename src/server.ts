import app from "./app";

app.listen({
    port: 1212
}).then(() => {
    console.log("Servidor iniciado na porta: 1212")
}).catch((ex) => {
    console.log(ex)
})