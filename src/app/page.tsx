import AppContainer from './components/AppContainer'
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