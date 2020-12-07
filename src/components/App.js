import Routers from '../components/Router'
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import {SearchProvider} from './Context';
import {useState, useEffect} from 'react';
// import lottie from "lottie-web";
// import reactLogo from "../static/loading.json"


const Mainwrap = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`;


function App() {

  // useEffect(()=>{
  //   lottie.loadAnimation({
  //     container: document.querySelector("#react-logo"),
  //     animationData: reactLogo
  //   });
  // },[])

  const [search, setSearch] = useState("");

  const getSearchValue = (e) => {
    const {value} = e.target;
    setSearch(value);
}
  return (
    <SearchProvider value={{search, getSearchValue}}>
      <Mainwrap>
      {/* <div id="react-logo" /> */}
        <Routers />
        <Footer />
        <GlobalStyles />
      </Mainwrap>
    </SearchProvider>
  );
}

export default App;
