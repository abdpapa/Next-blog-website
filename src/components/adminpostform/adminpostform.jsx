"use client"
import React from 'react'
import { useFormState } from "react-dom";
import styles from "./adminpostform.module.css"
import { AddPost } from '@/lib/action';
const Adminpostform = ({userId}) => {


    const [state,formAction]=useFormState(AddPost,undefined)
  return (
    <div>
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
    </div>
  )
}
export default Adminpostform
