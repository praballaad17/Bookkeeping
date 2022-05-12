import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/useAuthListener';
import MainLoader from './loader/mainLoader';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const Sidebar = lazy(() => import('./Components/Sidebar'));
const Uppernavbar = lazy(() => import('./Components/Uppernavbar'));
const Centerpart = lazy(() => import('./Components/Centerpart'));
// const NotFound = lazy(() => import('./pages/not-found')); 

export default function App() {
  const { user, jwt } = useAuthListener();

  console.log(user, jwt);

  return (
    <>
      <Router>
        <Suspense fallback={<MainLoader />}>

          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.DASHBOARD} element={<><Uppernavbar/><Sidebar/><Centerpart/></>} />
            {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD}  >
                  <Dashboard />
                </ProtectedRoute> */}

            {/* <Dashboard /> */}
          </Routes>
        </Suspense>
      </Router>
    </>

  );
}