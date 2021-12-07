import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./components/PhotoViewer";
import {ImageSelector} from "./components/ImageSelector";
import {useState} from "react";

function App() {
    const [currentImg, setCurrentImg] = useState("https://picsum.photos/id/600/1600/900.jpg");
    return(
        <div>
            <PhotoViewer imgUrl={currentImg}/>
            <ImageSelector updateImg={setCurrentImg}/>
        </div>
    )
}

export default App;
