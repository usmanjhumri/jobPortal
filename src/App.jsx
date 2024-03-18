import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import SavedJobs from './Pages/SavedJobs/SavedJobs'
import About from './Pages/About/About'
import ContactUs from './Pages/ContactUs/ContactUs'
import Jobs from './Pages/Jobs/Jobs'
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
        <Route element={<ContactUs />} path='/contact-us' />
        <Route element={<Jobs />} path='/jobs' />
      </Routes>
      <Footer />
    </>
  )
}
export default App
