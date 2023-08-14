import React, { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import ContactInfo from './contacts/ContactInfo';
import ContactForm from './form/ContactForm';
import './AppContainer.scss';

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Header />
      <section className="text-center">
        <h1 className="text-3xl mt-7 font-bold mb-3">Contact Us</h1>
        <span className="text-xl mb-7 block">Any question or remarks? Just write us a message!</span>
      </section>
      <section className="w-full">
        <div
          className="app-container-wrap my-10 mx-auto flex flex-col lg:flex-row md:flex-col sm:flex-col bg-white p-3 rounded-md"
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      { children }
    <Footer />
  </div>
);

export default AppContainer;