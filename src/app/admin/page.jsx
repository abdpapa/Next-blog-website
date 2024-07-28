import React from 'react'
import { Suspense } from 'react'
import Adminpostform from '@/components/adminpostform/adminpostform'
import { auth } from '@/lib/auth'
import styles from "./admin.module.css"
import AdminPosts from '@/components/adminposts/adminposts'
import AdminUserForm from '@/components/adminuserform/adminuserform'
import AdminUsers from '@/components/adminusers/adminusers'

const Admin =async () => {

    const session=await auth();
  //  console.log(session.user);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Adminpostform userId = {session.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
      </div>
  )
}
export default Admin
