import { lazy } from 'react';
import CustomerDetails from 'pages/CustomerDetails';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
import { Invoices } from './Invoices';
import { Layout } from './Layout';

const Sales = lazy(() => import('../pages/Sales'));
const Customers = lazy(() => import('../pages/Customers'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
