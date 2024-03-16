
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SavedJobs from './components/SavedJobs/SavedJobs'
import About from './components/About/About'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<SignIn />} path='/login' />
        <Route element={<SignUp />} path='/signup' />
        <Route element={<SavedJobs />} path='/savedjobs' />
        <Route element={<About />} path='/about' />
      </Routes>
      <Footer />
    </>
  )
}

export default App
