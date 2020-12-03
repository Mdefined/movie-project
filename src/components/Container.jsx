import styled from 'styled-components';

const Container = styled.div`
    width:1200px;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const PaddingContainer = styled(Container)`
    padding-top: 70px;
`;

export default Container;