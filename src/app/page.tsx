import { getUserServer } from '@/entities/user/api/getUserServer'

export default async function Home() {
  const user = await getUserServer()
  if (!user) {
    return (
      <>
        <h1>Unauthorized</h1>
      </>
    )
  }

  return (
    <>
      <h1>Hello, {user.email}</h1>
    </>
  )
}
