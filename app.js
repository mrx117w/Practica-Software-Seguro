const usuario = process.env.APP_USER;
const password = process.env.APP_PASSWORD;
const token = process.env.APP_TOKEN;

if (!usuario || !password || !token) {
    console.error("Faltan variables de entorno.");
    process.exit(1);
}

console.log("Configuración cargada sin mostrar credenciales.");
