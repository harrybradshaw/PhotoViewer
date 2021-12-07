import './PhotoViewer.css';

export const PhotoViewer = ({imgUrl}) => {
    return (
        <div>
            <img src={imgUrl} alt="" className="BigPhoto"/>
        </div>
    );
}