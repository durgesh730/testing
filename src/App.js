import Job from './pages/Jinrai/Job';
import Home from './pages/Jinrai/Home';
import Login from './pages/admin/Login';
import About from './pages/Jinrai/About';
import Contact from './pages/Jinrai/Contact';
import Invoice from './pages/Inventory/Invoice';
import Dashboard from './pages/admin/Dashboard';
import Portfolio from './pages/Jinrai/Portfolio';
import NotFound from './component/notFound/NotFound';
import ProtectedRoute from './pages/admin/ProtectedRoute';
import JobApplyForm from './pages/Jinrai/JobApplyForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InventoryLogin from './features/Inventory/auth/InventoryLogin';
import UserManagement from './pages/Inventory/Customer';
import { ManageInvoice } from './pages/Inventory/ManageInvoice';
import RoleProtectedRoute from './pages/Inventory/RoleProtectedRoute';
import ManageProduct from './pages/Inventory/ManageProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/job' element={<Job />} />
        <Route path='/job-apply' element={<JobApplyForm />} />
        <Route path='/login' element={<InventoryLogin />} />
        <Route path='/create-invoice' element={
          <RoleProtectedRoute>
            <Invoice />
          </RoleProtectedRoute>
        } />
        <Route path='/users' element={
          <RoleProtectedRoute>
            <UserManagement />
          </RoleProtectedRoute>
        } />
        <Route path='/manage-invoice' element={
          <RoleProtectedRoute>
            <ManageInvoice />
          </RoleProtectedRoute>
        } />
        <Route path='/manage-product' element={
          <RoleProtectedRoute>
            <ManageProduct />
          </RoleProtectedRoute>
        } />

        {/* Admin Routes */}
        {/* <Route path='/admin/login' element={<Login />} />

        <Route path='/admin' element={<ProtectedRoute />}>
          <Route path='create-job' element={<Dashboard />} />
        </Route> */}

        {/* Fallback Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// allowedRoles={['admin', "salesPerson", "subAdmin"]}


export default App;
