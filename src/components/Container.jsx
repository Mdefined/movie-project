import styled from 'styled-components';

const Container = styled.div`
    width:1200px;
    height:auto;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const ContentsContainer = styled.div`
    width:1200px;
    height:auto;
    padding:70px 0;
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
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const VideoWtap = styled.div`
    height:550px;
    overflow:hidden;
    position:relative;
    iframe{position:absolute; top:-200px;}
`; 

export const NonePreviewWrap = styled.div`
    width:100%;
    height:300px;
    font-size:32px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default Container;