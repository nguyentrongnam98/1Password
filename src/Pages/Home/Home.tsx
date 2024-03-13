import { AuthContext } from '@/context/AuthContext/AuthContext'
import { useContext } from 'react'

export default function Home() {
  const context = useContext(AuthContext)
  console.log(context)
  return <div>Home Page</div>
}
