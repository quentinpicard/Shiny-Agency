import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './componants/Header';
import ClientForm from './componants/ClientForm';
import FreelanceForm from './componants/FreelanceForm';

const root = ReactDOM.createRoot(document.getElementById('root'),);
root.render(
<React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} >
                <Route path='client' element={<ClientForm />} />
                <Route path='freelance' element={<FreelanceForm />} />
              </Route>
          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

