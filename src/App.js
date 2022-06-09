import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation/Navigation.component';
import Home from './components/routes/Home/Home.component';
import Authentication from './components/routes/Authentication/Authentication.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
