import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Header from './componants/Header';
import Results from './pages/Results';
import Freelances from './pages/Freelances';


import Survey from './pages/Survey';
// import ClientForm from './componants/ClientForm';
// import FreelanceForm from './componants/FreelanceForm';
import Error from './componants/Error';

const root = ReactDOM.createRoot(document.getElementById('root'),);
root.render(
<React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/results' element={<Results />} />
              <Route path='/freelances' element={<Freelances />} />
              <Route path="/survey/:questionNumber" element={<Survey />} >
                {/* <Route path='client' element={<ClientForm />} />
                <Route path='freelance' element={<FreelanceForm />} /> */}
              </Route>
              <Route path='*' element={<Error />}/>
          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

