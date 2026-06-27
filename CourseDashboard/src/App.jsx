import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Grades from './pages/Grades'
import CourseDetails from './pages/CourseDetails'
import Courses from  './pages/Courses'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="grades" element={<Grades/>}/>

        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App
