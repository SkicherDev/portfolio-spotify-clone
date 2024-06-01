import React from "react";
import styled from "@emotion/styled";
import home from "../assets/home.svg";
import likes from "../assets/likes.svg";
import linbary from "../assets/linbary.svg";
import playList from "../assets/playList.svg";
import Search from "../assets/Search.svg";
import "./comp.css";
import { Link } from "react-router-dom";
function LeftSidebar() {
  const SidebarWrapper = styled.div`
    width: 300px;
    min-height: 100vh;
    background-color: black;
    color: #b3b3b3;
    padding: 70px 29px;
  `;
  return (
    <SidebarWrapper>
      <div className="sideWrapeer_title fixed">
        <div className="sideWrapeer_title_header">
          <div className="sideWrapper_header">
            <Link
              to="/"
              className="sideWrapeer_title_header-title cursor-pointer hover:opacity-70"
            >
              <img src={home} alt="" />
              <p>Home</p>
            </Link>
            <div className="sideWrapeer_title_header-title cursor-pointer hover:opacity-70">
              <img src={Search} alt="" />
              <p>Search</p>
            </div>
            <div className="sideWrapeer_title_header-title cursor-pointer hover:opacity-70">
              <img src={linbary} alt="" />
              <p>Your Library</p>
            </div>
          </div>
          <div className="sideWrapeer_title_header-title cursor-pointer transition-all hover:opacity-70">
            <img src={playList} alt="" />
            <p>Create Playlist</p>
          </div>
          <Link
            to="/likes"
            className="sideWrapeer_title_header-title cursor-pointer hover:opacity-70"
          >
            <img src={likes} alt="" />
            <p>Liked Songs</p>
          </Link>
          <hr />
        </div>

        <div className="sideWrapeer_title_description">
          <p className="cursor-pointer hover:opacity-70">Chill Mix</p>
          <p className="cursor-pointer hover:opacity-70">Insta Hits</p>
          <p className="cursor-pointer hover:opacity-70">Your Top Songs 2021</p>
          <p className="cursor-pointer hover:opacity-70">Mellow Songs</p>
          <p className="cursor-pointer hover:opacity-70">
            Anime Lofi & Chillhop Music
          </p>
          <p className="cursor-pointer hover:opacity-70">
            BG Afro “Select” Vibes
          </p>
          <p className="cursor-pointer hover:opacity-70">Afro “Select” Vibes</p>
          <p className="cursor-pointer hover:opacity-70">Happy Hits!</p>
          <p className="cursor-pointer hover:opacity-70">Deep Focus</p>
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default LeftSidebar;
