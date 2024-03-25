// import AuthPage from '@/Pages/Auth'
import Theme from '@/Theme'
import { AuthProvider } from './context/AuthContext/AuthContext'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Theme>
      <AuthProvider>
        {/* <AuthPage /> */}
        <Home />
      </AuthProvider>
    </Theme>
  )
}

export default App
