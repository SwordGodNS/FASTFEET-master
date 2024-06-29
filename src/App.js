import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigator from './componentes/navigator/Navigator';
import LoginPage from './componentes/login/Login';
import Form from './componentes/formEntrega/Form';
import FormEntregador from './componentes/formEntregador/FormEntregador';
import FormAdd from './componentes/formAdd/FormAdd';
import CadastroSelect from './pages/cadastroSelect/CadastroSelect';
import CadastroSucess from './pages/cadastroSucess/CadastroSucess';
import EntregaVis from './pages/entregaVis/EntregaVis';
import UserLoginPage from './componentes/loginEntregador/LoginEntregador';
import EntregasEntregador from './pages/entregasEntregador/EntregasEntregador';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); //

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated'); //
    if (storedIsAdmin) {
      setIsAdmin(storedIsAdmin === 'true');
    }
    if (storedIsAuthenticated) {
      setIsAuthenticated(storedIsAuthenticated === 'true');
    }//
  }, []);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin);
    localStorage.setItem('isAuthenticated', isAuthenticated);//
  }, [isAdmin, isAuthenticated]);

  return (
    <Router>
      <Navigator isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated 
              ? isAdmin 
                ? <Navigate to="/cadastroSelect" /> 
                : <Navigate to="/entregas" /> 
              : <Navigate to="/loginEntregador" />
          } 
        />
        <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/loginEntregador" element={<UserLoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/form" element={isAuthenticated ? <Form /> : <Navigate to="/loginEntregador" />} />
        <Route path="/formEntregador" element={isAdmin ? <FormEntregador /> : <Navigate to="/login" />} />
        <Route path="/formAdd" element={isAdmin ? <FormAdd /> : <Navigate to="/login" />} />
        <Route path="/cadastroSelect" element={isAdmin ? <CadastroSelect setIsAdmin={setIsAdmin} /> : <Navigate to="/login" />} />
        <Route path="/cadastroSucesso" element={isAdmin ? <CadastroSucess /> : <Navigate to="/login" />} />
        <Route path="/entregaVis" element={isAdmin ? <EntregaVis /> : <Navigate to="/login" />} />
        <Route path="/entregasEntregador" element={isAuthenticated ? <EntregasEntregador /> : <Navigate to="/loginEntregador" />} />
      </Routes>
    </Router>
  );
}

export default App;
