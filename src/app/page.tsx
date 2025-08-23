import { getCurrentUser } from '@/features/auth/model/auth.service'

export default async function Home() {
  const user = await getCurrentUser()
  if (!user) {
    return (
      <>
        <h1>Unauthorized</h1>
      </>
    )
  }

  return (
    <>
      <h1>Hello, {user.fullName}</h1>
    </>
  )
}
