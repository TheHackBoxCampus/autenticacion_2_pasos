import express from "express";
import session from "express-session";
import router from "./router/discord.router.js";
import app from "./app.js";
import passport from "passport";

/**
 * ! set -> port // settings
 */

app.set("port", process.env.PORT || 3000)
/**
 * * middlewares
 */
app.use(express.json()); 
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: "logindiscord",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); 
app.use(passport.session()); 

/**
 * * Static files
 */

app.use("/home", express.static("public"));

/**
 * * Routes
 */

app.use("/", router); 

/**
 * * Server
 */

app.listen(app.get("port"), () => {
    console.log("listening in port " + app.get("port"))
}); 

