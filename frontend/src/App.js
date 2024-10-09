
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminRegister from './pages/AdminRegister';
import UserRegister from './pages/UserRegister';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import CreateTicketCategoryPage from './components/CreateTicketCategoryPage';
import ViewTicketCategoriesPage from './components/ViewTicketCategoriesPage';
import UpdateTicketPage from './components/UpdateTicketCategoryForm';
import DeleteCategoryDialog from './components/DeleteCategoryDialog'; // Import if needed separately
import CreateTicket from './components/CreateTicketForm';
import TicketsHomePage from './components/TicketsHomePage'; 
import TicketDetailsView from './components/TicketDetailView';
import TicketSearch from './components/TicketSearch';
import TicketUpdate from './components/EditTicketForm';
import SideBar from "./components/SideBar"
import HomePageRecent from './components/homePage';
import TicketDetails from './components/TicketDetailsPage';
import CartPage from './components/CartPage';
import PurchaseSuccess from './components/CheckoutSuccessPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/admin/register" element={<AdminRegister />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/admin/create-category" element={<CreateTicketCategoryPage />} />
                <Route path="/admin/view-category" element={<ViewTicketCategoriesPage />} />
                <Route path="/admin/update-ticket/:id" element={<UpdateTicketPage />} />
                <Route path="/admin/delete-category/:id" element={<DeleteCategoryDialog />} />
                <Route path="/admin/create-ticket" element={<CreateTicket />} />
                <Route path="/tickets" element={<TicketsHomePage />} /> 
                <Route path='/ticket-detail/:id' element={<TicketDetailsView />} />
                <Route path='/ticket-search' element={<TicketSearch/>} />
                <Route path='/ticket-update/:id' element={<TicketUpdate/>} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path='/home-recent' element={< HomePageRecent/>} />
                <Route path='/home-detail/:id' element={< TicketDetails />} />
                <Route path='/cart/:id' element={<CartPage/>} />
                <Route path="/checkout-success" component={<PurchaseSuccess/>} />
        
            </Routes>
        </Router>
    );
};

export default App;
