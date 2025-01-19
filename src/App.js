import Job from './pages/Jinrai/Job';
import Home from './pages/Jinrai/Home';
import About from './pages/Jinrai/About';
import Contact from './pages/Jinrai/Contact';
import Invoice from './pages/Inventory/Invoice';
import Portfolio from './pages/Jinrai/Portfolio';
import NotFound from './component/notFound/NotFound';
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
        <Route path='/inventory/login' element={<InventoryLogin />} />
        <Route path='/inventory/create-invoice' element={
          <RoleProtectedRoute
            allowedRoles={['admin', "salesPerson", "subAdmin"]}
          >
            <Invoice />
          </RoleProtectedRoute>
        } />
        <Route path='/inventory/users' element={
          <RoleProtectedRoute
            allowedRoles={['admin', "salesPerson", "subAdmin"]}
          >
            <UserManagement />
          </RoleProtectedRoute>
        } />
        <Route path='/inventory/manage-invoice' element={
          <RoleProtectedRoute
            allowedRoles={['admin', "salesPerson", "subAdmin"]}
          >
            <ManageInvoice />
          </RoleProtectedRoute>
        } />
        <Route path='/inventory/manage-product' element={
          <RoleProtectedRoute
            allowedRoles={['admin', "salesPerson", "subAdmin"]}
          >
            <ManageProduct />
          </RoleProtectedRoute>
        } />

        {/* Admin Routes */}
        {/* <Route path='/admin/login' element={<Login />} />

        <Route path='/admin' element={<ProtectedRoute />}>
          <Route path='create-job' element={<Dashboard />} />
        </Route> */}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
