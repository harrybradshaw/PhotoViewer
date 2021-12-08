import {imageUrls} from "./ThumbnailList";
import {MiniPhoto} from "./MiniPhoto";

export const ImageSelector = ({updateImg}) => {
    const images = imageUrls.map(url => <MiniPhoto imgUrl={url} updateMiniImg={updateImg}/>);
    return (
        <div>
            {images}
        </div>
)
}