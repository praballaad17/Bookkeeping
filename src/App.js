import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/useAuthListener';
import MainLoader from './loader/mainLoader';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authenticate/Authentication';
import AuthLogin from './pages/Authenticate/AuthLogin';
import AuthSignup from './pages/Authenticate/AuthSignup';

// const Login = lazy(() => import('./pages/Login'));
// const SignUp = lazy(() => import('./pages/Signup'));
const Sidebar = lazy(() => import('./Components/Sidebar'));
const Uppernavbar = lazy(() => import('./Components/Uppernavbar'));
// const NotFound = lazy(() => import('./pages/not-found')); 

export default function App() {
  const { user, jwt } = useAuthListener();

  console.log(user, jwt);

  return (
    <>
      <Router>
        <Suspense fallback={<MainLoader />}>

          <Routes>
            <Route path={ROUTES.AUTHENTICATION} element={<Authentication user={user} />} children={[AuthSignup, AuthLogin ]} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard user={user} />} />
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