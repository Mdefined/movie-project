import styled from 'styled-components';

const Container = styled.div`
    width:1200px;
    height: auto;

    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const PaddingContainer = styled(Container)`
    padding-top: 70px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default Container;