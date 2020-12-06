import styled from 'styled-components';

const Container = styled.div`
    width:1200px;
    height:auto;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const PreviewContainer = styled.div`
    width:1200px;
    height:auto;
    margin:0 auto;
    h2{
        &:before{
            content:''; width: 5px; height: 26px; background: #ff0000; 
            border: none; margin-right: 8px; display: inline-block;
        }
        font-size:28px; font-weight:bold; margin-bottom:30px;
    }
`;

export const VideoContainer = styled(Container)`
    justify-content:space-between;
    align-items:flex-start;
    padding: 85px 0;
`;


export const SubContainer = styled.div`
    padding-top:70px;
    width:100%;
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