import Routers from '../components/Router'
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const Mainwrap = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`;

function App() {
  return (
    
    <Mainwrap>
      <Routers />
      <Footer />
      <GlobalStyles />
    </Mainwrap>
  );
}

export default App;
