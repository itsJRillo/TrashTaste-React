import { useContext } from "react";
import VideoContext from "../context/VideoProvider";

const useDisplay = () => {
    return useContext(VideoContext)
}

export default useDisplay