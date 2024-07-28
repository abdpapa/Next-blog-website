import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
    try {
      await connectToDb();
      const posts = await Post.find();
      
      return posts;
    } catch (err) {
        
    //   console.log(err);
    //   throw new Error("Failed to fetch posts!");
    }
  };

  export const getUsers = async () => {
    try {
      await connectToDb();
      const users = await User.find();
      
      return users;
    } catch (err) {
        
    //   console.log(err);
    //   throw new Error("Failed to fetch posts!");
    }
  };

  export const getPost = async ({slug}) => {
    try {
      await connectToDb();
      console.log({slug})
      const posts = await Post.findOne({slug});
      
      return posts;
    } catch (err) {
         
    //   console.log(err);
    //   throw new Error("Failed to fetch posts!");
    }
  };

  export const getUser = async (id) => {
    try {
      await connectToDb();
      console.log({id})
      const posts = await User.findById(id);
      
      return posts;
    } catch (err) {
         console.log("hi")
    //   console.log(err);
    //   throw new Error("Failed to fetch posts!");
    }
  };