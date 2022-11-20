import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import RightSideBar from './components/rightSideBar/RightSideBar';
import Home from './pages/home/Home';
import Profile from './pages/userProfile/Profile';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftSideBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightSideBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      {/* <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
