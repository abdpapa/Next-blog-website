import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";
//WE CREATE AUTH CONFIG SEPERATELY AND NOT IN AUTH BECAUSE MIDDLE WARE CANNOT USE THAT AUTH BECAUSE IT HAS NODE DEPENEDENCIES THERFORE WE CREATE AUTH.CONFIG.JS
export default NextAuth(authConfig).auth;
export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};