import './MiniPhoto.css';

export const MiniPhoto = ({imgUrl, updateImg}) => {
    return (
        <div>
            <img src={imgUrl} onClick={() => updateImg({imgUrl})} alt="" className={MiniPhoto}/>
        </div>
    );
}