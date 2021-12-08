import './MiniPhoto.css';

export const MiniPhoto = ({imgUrl, updateMiniImg}) => {
    return (
        <div>
            <img src={imgUrl} onClick={() => updateMiniImg(imgUrl)} className="MiniPhoto"/>
        </div>
    );
}