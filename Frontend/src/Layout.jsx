import Navbar from './components/Navbar'
import { Outlet} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'


function Layout() {
  
  return (
    <div className='min-h-screen'>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;