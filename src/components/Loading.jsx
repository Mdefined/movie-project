import reactLOGO from "../static/loading.json"
import Lottie from 'lottie-react'
import {LoadingContainer} from '../components/Container';

function Loading() {
    const options = {
        loop: true,
        autoplay: true,
    }

    return(
        <LoadingContainer>
            <Lottie options={options} animationData={reactLOGO} style={{width:300, height:300}} />
        </LoadingContainer>
    );    
}

export default Loading;