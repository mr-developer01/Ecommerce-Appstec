import { Route, Routes } from 'react-router';
import LandingPage from '../components/pages/LandingPage';
import About from '../components/pages/About';

const Router = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
