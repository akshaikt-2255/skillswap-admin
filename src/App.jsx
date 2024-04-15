import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from "react";
import Loader from './components/Loader/Loader';

const Header = lazy(() => import('./components/Header/Header'));
const Login = lazy(() => import('./components/Login/Login'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ErrorPage = lazy(() => import('./components/ErrorPage/Error'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const UserDashboard = lazy(() => import('./components/Users/UserDashboard'));
const EventDashboard = lazy(() => import('./components/Events/EventsDashboard'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserDashboard />} />
            <Route path="/events" element={<EventDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
