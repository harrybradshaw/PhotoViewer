import {imageUrls} from "./ThumbnailList";
import {MiniPhoto} from "./MiniPhoto";

export const ImageSelector = ({updateImg}) => {
    //const images = imageUrls.map(url => <MiniPhoto imgUrl={url} updateImg={updateImg}/>);
    return (
        <div>
            {/*{images}*/}
            {/*<MiniPhoto imgUrl="https://picsum.photos/id/649/1600/900.jpg" updateImg={updateImg}/>*/}
            <img src="https://picsum.photos/id/649/1600/900.jpg" onClick={()=>updateImg("https://picsum.photos/id/649/1600/900.jpg")}/>
            <img src="https://picsum.photos/id/648/1600/900.jpg" onClick={()=>updateImg("https://picsum.photos/id/649/1600/900.jpg")}/>
        </div>
)
}