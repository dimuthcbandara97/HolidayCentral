
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './assets/pages/IndexPage'
import LoginPage from './assets/pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './assets/pages/RegisterPage'

function App() {

  return (
    <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element = {<IndexPage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/register' element = {<RegisterPage/>}/>
     </Route>
    </Routes>
    
  )
}

export default App
