import React, { useLayoutEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import About from 'pages/About/About';
import Login from 'pages/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/actionCreator';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

const LazyView = React.lazy(() => import('pages/View/View'));

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useLayoutEffect(() => {
    if (token) {
      dispatch(getUser(token));
    }
  }, []);

  const userToken = useSelector((state) => state.user.user.token);
  console.log(userToken);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              {token ? (
                <Route path="/viewanimals" element={<React.Suspense fallback={<div style={{ paddingTop: '7rem', textAlign: 'center' }}>Loading...</div>}><LazyView /></React.Suspense>} />
              ) : (
                <Route
                  path="/viewanimals"
                  element={<Navigate to="/login" replace />}
                />
              )}
            </>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
