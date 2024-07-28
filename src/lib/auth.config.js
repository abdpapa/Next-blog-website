
export const authConfig={
    pages:{
        signIn:"/login"
    },
    providers:[],
    callbacks:{
        async jwt({user,token}){
            if(user){
            token.id=user.id
            token.isAdmin=user.isAdmin
            }
            return token
        },
        async session({session,token}){
            if(token){
           session.user.id=token.id
           session.user.isAdmin=token.isAdmin
            }
            return session
        },
        authorized({auth,request}){
               const user=auth?.user;
              

              
               const isOnAdminPanel=request.nextUrl?.pathname.startsWith("/admin");
               const isOnBlogPage=request.nextUrl?.pathname.startsWith("/blog");
               const isOnLoginPage=request.nextUrl?.pathname.startsWith("/login");


               //ONLY ADMINS CAN ACCESS THE ADMIN PAGE

               if(isOnAdminPanel && !user?.isAdmin){
                return false;
               }
                //ONLY LOGGGED IN USERS CAN ACCESS THE BLOG PAGE
               if(isOnBlogPage && !user){
                return false;
               }
               if(isOnLoginPage && user){
                return Response.redirect(new URL("/",request.nextUrl))
               }
               return true;
        }
    }

}