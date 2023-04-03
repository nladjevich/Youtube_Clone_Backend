import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Searched() {
    const [searchedVideo, setSearchedVideo] = useState([]);
    let params = useParams();
  
    const getVideo = async (name) => {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${name}&part=snippet&key=AIzaSyAq75op4-m7IwM3C7-ckLCaemnSStR4X-A`
      );
      const video = await data.json();
      setSearchedVideo(video.items[0].snippet.thumbnails.default);
      console.log(video.items[0].snippet.thumbnails.default)
    };
  
    useEffect(() => {
      getVideo(params.search);
    }, [params.search]);

    return (
        <div>
            <img src={searchedVideo.url} alt="" />
        </div>
    )

}


export default Searched