import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
// import Login from './pages/Login';
// import SignUp from './pages/Signup';
// import Dashboard from './Components/Dashboard'
import MainLoader from './loader/mainLoader';


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./Components/Dashboard'));
// const NotFound = lazy(() => import('./pages/not-found')); 

export default function App() {
  // const { user, jwt } = useAuthListener() 

  return (
    <>
      <Router>
        <Suspense fallback={<MainLoader />}>

          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
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