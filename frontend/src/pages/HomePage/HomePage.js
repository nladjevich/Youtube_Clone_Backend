import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAq75op4-m7IwM3C7-ckLCaemnSStR4X-A`, {
  
        });
        setVideo(response.data.items[0].snippet.thumbnails.default);
        console.log(response.data.items.snippet[0].snippet.thumbnails.default)
      } catch (error) {
        console.log(error.response.data.items[0].snippet.thumbnails.default);
      }
    };
    fetchCars();
  }, []);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
        <img src={videos.url}></img>
      </div>
    </div>
  );
};

export default HomePage;
