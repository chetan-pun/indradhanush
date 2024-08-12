import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Properties/Dashboard';
import Login from './pages/Properties/Login';
import Signup from './pages/Properties/Signup';
import ProtectedRoutes from './auth/ProtectedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Create from './pages/Properties/Create';
import PropertyDetails from './pages/PropertyDetails';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            {/* public routes */}
            <Route path="/indradhanush/" element={<Home />} />
            <Route path="/indradhanush/details" element={<PropertyDetails />} />
            <Route path="/indradhanush/property/signup" element={<Signup />} />
            <Route path="/indradhanush/property/login" element={<Login />} />

            {/* private routes */}
            <Route element={<ProtectedRoutes />}>
               <Route path="/indradhanush/property" element={<Dashboard />} />
               <Route path="/indradhanush/property/create" element={<Create />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
