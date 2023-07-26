## Autenticación en dos pasos 🗝️ 

La autenticación de múltiples factores, más comúnmente conocida por sus siglas en inglés MFA, es un método de control de acceso informático en el que a un usuario se le concede acceso al sistema solo después de que presente dos o más pruebas diferentes de que es quien dice ser. Estas pruebas pueden ser diversas, como una contraseña, que posea una clave secundaria rotativa, o un certificado digital instalado en el equipo, biometría, entre otros.

La autenticación de dos factores (A2F), también usada la sigla inglesa 2FA (de two-factor authentication), es un método que confirma que un usuario es quien dice ser combinando dos componentes diferentes de entre: 1) algo que saben; 2) algo que tienen; y 3) algo que son. Es el método más extendido en la actualidad para acceder a cuentas de correo como las de iCloud o Gmail, pero generalmente se solicita que el usuario active voluntariamente esta capa de protección adicional.

Un ejemplo de la vida cotidiana de este tipo de autenticación es la retirada de efectivo de un cajero automático. Solo tras combinar una tarjeta de crédito —algo que el usuario posee— y un pin —algo que el usuario sabe— se permite que la transacción se lleve a cabo. Otro ejemplo ocurre en las redes sociales como Facebook, WhatsApp o Instagram, usar la verificación en dos pasos hace que prácticamente un hacker te pueda quitar tu cuenta. Pues, aunque entre en tu cuenta cambie tu mail y contraseña, tu tendrás la oportunidad de demostrar que la cuenta es tuya a través de esas 2 contraseñas.


## Passport.js 🟨

Passport es un middleware de autenticación para Node.js. Extremadamente flexible y modular, Passport se puede colocar discretamente en cualquier aplicación web basada en Express. Un conjunto integral de estrategias admite la autenticación mediante un nombre de usuario y contraseña, Facebook, Twitter y más.

## Autenticación de ``DISCORD`` <img src="public/assets/discord.svg" >
El proyecto se realizo con el objetivo de poder realizar autenticación a los usuarios que tuvieran una cuenta de discord.

## Inicialización del proyecto 

Clonamos el repositorio e instalamos las dependencias del archivo ``package.json``

```bash 
git clone 'https://github.com/TheHackBoxCampus/autenticacion_2_pasos.git'

cd autenticacion_2_pasos

npm i || npm install 
```

### Dependencias
- express
- express-session
- passport 
- passport-discord
- passport-oauth
- nodemon

## Escucha del Servidor
```bash
npm run dev // lanzas el servidor de express
```

### Configuración de la libreria ``passport-discord``

```js
var DiscordStrategy = require('passport-discord').Strategy;

var scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.use(new DiscordStrategy({
    clientID: 'id',
    clientSecret: 'secret',
    callbackURL: 'callbackURL',
    scope: scopes
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ discordId: profile.id }, function(err, user) {
        return cb(err, user);
    });
}));
```

### Verificar el token de Autenticación
```js
const auth = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();         
    }else {
        res.send({data: undefined})
    }
}

export default auth; 
```

## Tecnologia para el Routing
En este caso para el manejo del router, se esta utilizando la libreria express
```js
import {Router} from "express"

const router = Router();

export default router; 
```

## Rutas
Se realizaron 3 rutas:

```JS
router.get("/login", passport.authenticate("discord", {failureRedirect: "/home"}), (req, res) => {})

router.get("/perfil", authVerify, (req, res) => {})

// files statics
app.use("/home", express.static("public"));
```

``/login``: Esta ruta autentica los usuarios mediante discord, donde deberas colocar una cuenta de discord en caso de que no tengas tu cuenta ya asociada a discord. 

``/perfil``: Ruta final, donde recibiras la información de tus servidores e informacion tuya asociada a tu cuenta de discord. 

``/home``: Reside un apartado que te redireccionara a ``login``





