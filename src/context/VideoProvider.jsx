import { useState, createContext } from "react";

const VideoContext = createContext()

const VideoProvider = ({children}) => {

    const [urlDisplay, setURLDisplay] = useState("")  

    return (
        <VideoContext.Provider
        value={{
            urlDisplay,
            setURLDisplay
        }}>
            {children}
        </VideoContext.Provider>
    )
}

export {
    VideoProvider
}

export default VideoContext;