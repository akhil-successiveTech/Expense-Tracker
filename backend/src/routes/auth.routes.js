import { Router } from "express";
import passport from "passport";
import { login, signup } from "../controllers/auth.controller.js";
import "../config/passport.js"; // load google strategy

const router = Router();

// Normal signup/login
router.post("/signup", signup);
router.post("/login", login);

// Google signup - start auth
router.get("/google", 
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google signup - callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/signup" }),
  (req, res) => {
    const token = req.user.generateJWT ? req.user.generateJWT() : "jwt_here";
    const redirectUrl = `${process.env.CLIENT_URL}/google-success?token=${token}`;
    return res.redirect(redirectUrl);
  }
);

export default router;
