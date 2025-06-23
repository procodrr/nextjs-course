'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import SignOut from '../components/SignOut'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()
  if (status === 'unauthenticated') {
    return redirect('/login')
  }
  if (!session) {
    return <p>Loading...</p>
  }

  const { user } = session

  console.log(user)

  const formattedDate = new Date(session.expires).toLocaleString()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 dark:bg-gray-900">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          User Profile
        </h1>

        {user && (
          <div className="relative rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-800">
            <SignOut />
            <Image
              src={user.image as string}
              alt={user.name as string}
              className="mx-auto mb-4 h-18 w-18 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {user.name}
            </h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Session Expires:
              <br />
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {formattedDate}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
