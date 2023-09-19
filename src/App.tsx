import React from 'react';
import GlobalStyle from 'styles/global';
import Header from './components/molecules/header';
import HomePage from './components/pages/home';
import Container from './components/atoms/Conatianer';
import { Route, Routes } from 'react-router-dom';
import ProjectsPage from './components/pages/projects';
import ContactUsPage from './components/pages/contactUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
