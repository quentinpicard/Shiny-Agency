import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {createGlobalStyle} from 'styled-components';

import Home from './pages/Home';
import Header from './componants/Header';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Footer from './componants/Footer';
import {ThemeProvider} from './utils/context/index';
import GlobalStyle from './utils/style/GlobalStyle';


import Survey from './pages/Survey';
import Error from './componants/Error';
// import ClientForm from './componants/ClientForm';
// import FreelanceForm from './componants/FreelanceForm';



const root = ReactDOM.createRoot(document.getElementById('root'),);
root.render(
<React.StrictMode>
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/results' element={<Results />} />
              <Route path='/Profils' element={<Freelances />} />
              <Route path="/survey/:questionNumber" element={<Survey />} >
                {/* <Route path='client' element={<ClientForm />} />
                <Route path='freelance' element={<FreelanceForm />} /> */}
              </Route>
              <Route path='*' element={<Error />}/>
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

