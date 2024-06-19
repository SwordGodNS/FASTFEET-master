import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './componentes/footer/Footer';
import  Navigator from './componentes/navigator/Navigator' ;
import Login from './componentes/login/Login';
import Form from './componentes/formEntrega/Form';
import FormAdmin from './componentes/formAdmin/FormAdmin'
import FormAdd from './componentes/formAdd/FormAdd'

function App() {
  return (
    <Router>
    <Navigator />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="form" element={<Form />} />
      <Route path="formAdmin" element={<FormAdmin />} />
      <Route path="formAdd" element={<FormAdd />} />
    </Routes>
    <Footer />
  </Router>  
  );
}

export default App;
