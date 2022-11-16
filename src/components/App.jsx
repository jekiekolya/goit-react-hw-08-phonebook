import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Header } from './index';

const Home = lazy(() =>
  import('../pages/Home/Home' /* webpackChunkName: "Home" */)
);
const Contacts = lazy(() =>
  import('../pages/Contacts/Contacts' /* webpackChunkName: "Contacts" */)
);
const Login = lazy(() =>
  import('../pages/Login/Login' /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import('../pages/Register/Register' /* webpackChunkName: "Register" */)
);
const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound' /* webpackChunkName: "NotFound" */)
);

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
