"use server"

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";

export const register=async(previousState,formData)=>{

  
    const { username, email, password,passwordRepeat,img} =
    Object.fromEntries(formData);

   // console.log("username is "+ username);
     if(password!=passwordRepeat)
     {
        return {error:"passwords dont match"}
     }
     try{
         await connectToDb()
        const user=await User.findOne({username})
        if(user){
            return {error:"user already exists"}
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser=new User(
            {
                username,
                email,
                password: hashedPassword,
                img
            }
        )
        await newUser.save()

        return {success:true}

     }
     catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
      }
}

export const handleGithubLogin = async () => {
   
    await signIn("github");
  };

export const login = async (prevState,formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
     // return {error:"something went wrong"}
      
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };

  export const logout= async () => {
  
    try {
      await signOut()
    } catch (err) {
      console.log(err);
      throw err;
    }
};

export const AddPost=async(prevState,formData)=>{

    const {title,slug,img,desc,userId}=Object.fromEntries(formData)

    const newPost=new Post(
        {
            title,
            slug,
            img,
            desc,
            userId
        }
    )
    
    try{
        connectToDb();
        await newPost.save()
        revalidatePath("/admin")
        revalidatePath("/blog")
       
    }
    catch(err){
        return {error:"Something went wrong"}
    }
    return {success:true}

}
export const deletePost=async(formData)=>{

    const {id}=Object.fromEntries(formData)
    try{
        connectToDb();
       
        await Post.deleteOne({ _id: id })
        revalidatePath("/blog")
        revalidatePath("/admin")
        
    }
    catch(err){
        return {error:"Something went wrong"}
    }
   

}
export const addUser=async(previousState,formData)=>{
    const {username,email,password,img}=Object.fromEntries(formData)
    const newUser=new User({
        username,email,password,img
    })
    console.log(newUser);
    try{
        connectToDb();
        await newUser.save()
        revalidatePath("/admin");
    }
    catch(err){
        return {error:"Something went wrong"}
    }
    return {success:true}

}
export const deleteUser=async(formData)=>{

    const {id}=Object.fromEntries(formData)
    try{
        connectToDb();
       
        await User.findByIdAndDelete(id)
        revalidatePath("/admin")
        
    }
    catch(err){
        return {error:"Something went wrong"}
    }
   

}