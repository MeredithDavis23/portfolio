import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import App from './App';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import { checkAuth } from './checkAuth';





// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route 
//         {...rest}
//         render={(props) => 
//         checkAuth() ? <Component {...props} /> : <Navigate to="/Login" />
//         }
//         />
//     )
// }

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/Details/:id" component={Details} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    );
};

export default Router;