import './PhotoViewer.css';

export const PhotoViewer = ({imgUrl}) => {
    return (
        <div>
            <img src={imgUrl} alt={imgUrl} className="BigPhoto"/>
        </div>
    );
}