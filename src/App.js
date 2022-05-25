import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/useAuthListener';
import MainLoader from './loader/mainLoader';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authenticate/Authentication';
import AuthLogin from './pages/Authenticate/AuthLogin';
import AuthSignup from './pages/Authenticate/AuthSignup';
import NotFound from './pages/NotFound';
import { UserProvider } from './Context/userContext';

// const Login = lazy(() => import('./pages/Login'));
// const SignUp = lazy(() => import('./pages/Signup'));
const Sidebar = lazy(() => import('./Components/Sidebar/Sidebar'));
const Uppernavbar = lazy(() => import('./Components/Uppernavbar'));
// const NotFound = lazy(() => import('./pages/not-found')); 

export default function App() {
  const { user, jwt } = useAuthListener();

  console.log(user, jwt);

  return (
    <>
      <UserProvider user={user} >
        <Router>
          <Suspense fallback={<MainLoader />}>

            <Routes>
              <Route path={ROUTES.AUTHENTICATION} element={<Authentication user={user} />} children={[AuthSignup, AuthLogin]} />
              <Route path={`${ROUTES.DASHBOARD}/*`} element={<Dashboard user={user} />} />
              <Route
                path="/"
                element={<Navigate to={ROUTES.DASHBOARD} replace />} />
              {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD}  >
                  <Dashboard />
                </ProtectedRoute> */}

              {/* <Dashboard /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </UserProvider>
    </>

  );
}