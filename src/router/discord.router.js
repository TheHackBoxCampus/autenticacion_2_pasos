import { Router } from "express"; 
import authVerify from "../middleware/auth.js";
import passport from "../auth/setting.passport.js";

const router = Router(); 

router.get("/login", passport.authenticate("discord", {failureRedirect: "/home"}), (req, res) => {
    res.redirect("/home/perfil.html"); 
})

router.get("/perfil", authVerify, (req, res) => {
    res.send(req.user); 
})

export default router;  