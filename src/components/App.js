import Routers from '../components/Router'
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import {SearchProvider} from './Context';
import {useState} from 'react';


const Mainwrap = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`;


function App() {
  
  const [search, setSearch] = useState("");

  const getSearchValue = (e) => {
    const {value} = e.target;
    setSearch(value);
}
  return (
    <SearchProvider value={{search, getSearchValue}}>
      <Mainwrap>
        <Routers />
        <Footer />
        <GlobalStyles />
      </Mainwrap>
    </SearchProvider>
  );
}

export default App;
