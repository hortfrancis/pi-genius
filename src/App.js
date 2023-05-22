import React from 'react';
import NavBar from './components/NavBar/NavBar';
import WelcomeSection from './components/WelcomeSection';
import SignupForm from './components/SignupForm';
import CallToActionButtons from './components/CallToActionButtons';
import FeaturedResources from './components/FeaturedResources/FeaturedResources';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeSection />
      <SignupForm />
      <CallToActionButtons />
      <FeaturedResources />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
