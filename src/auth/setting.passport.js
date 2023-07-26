import passport from "passport";
import { Strategy } from "passport-discord";
/**
 * * Settings from discord
 */

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(new Strategy({
    clientID:"1133592141260673044",
    clientSecret:"uFzG8dwt-9uHHbUjrzG6p8I_WbVCESxp",
    callbackURL:"http://localhost:3000/login",
    scope: ["identify", "guilds"]
}, (accesToken, refreshToken, profile, cb) => {
    process.nextTick(() => {
        return cb(null, profile)
    });
}))

export default passport; 