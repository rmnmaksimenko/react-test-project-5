import { getCustomerById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  //   console.log(customer);

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) return null;

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';
  console.log(backLinkHref);

  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>ID: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};

export default CustomerDetails;
