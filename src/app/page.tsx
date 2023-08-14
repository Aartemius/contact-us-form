import AppContainer from './components/AppContainer'
import ContactInfo from './components/contacts/ContactInfo';
import ContactForm from './components/form/ContactForm'
import { ReactNode } from 'react';

interface HomePageProps {
  children?: ReactNode;
}

const Home: React.FC<HomePageProps> = ({ children }) => {
  return (
    <AppContainer>
      {children}
    </AppContainer>
  )
}

export default Home;
