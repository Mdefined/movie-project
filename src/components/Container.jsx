import styled from 'styled-components';

const Container = styled.div`
    width:1200px;
    height:auto;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const HeaderContainer = styled(Container)`
    height:100%;
    justify-content:space-between;
`;


export const PaddingContainer = styled(Container)`
    padding: 70px 0;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export default Container;