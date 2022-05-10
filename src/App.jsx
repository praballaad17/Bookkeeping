// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
// import * as ROUTES from './constants/routes';

// import MainLoader from './loader/mainLoader';

// const Login = lazy(() => import('./pages/Login'));
// const SignUp = lazy(() => import('./pages/Signup'));
// const Dashboard = lazy(() => import('./pages/dashboard'));
// const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  // const { user, jwt } = useAuthListener()

  return (
    <>
     <Router>
      {/* <Suspense fallback={<MainLoader />}> */}
      
        {/* <Routes> */}
          {/* <Route path={ROUTES.LOGIN} component={() => <Login />} /> */}
          {/* <Route path={ROUTES.SIGN_UP} component={() => <SignUp />} /> */}
          {/* <Route path={ROUTES.DASHBOARD} component={() => <Dashboard />} /> */}
          {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD}  >
                  <Dashboard />
                </ProtectedRoute> */}
           
          {/* <Route exact path='/Dashboard' component={<Dashboard/>} /> */}
          <Dashboard/>
        {/* </Routes> */}
      {/* </Suspense> */}
     </Router>
    </>

  );
}
