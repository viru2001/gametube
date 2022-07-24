import React from "react";
import { useLocation } from "react-router";
import { Drawer, VideoList } from "../../components";
import { PlaylistListing } from "../../components";

const Home = () => {
  const location = useLocation().pathname;
  return (
    <>
      <Drawer
        content={
          location === "/playlists" ? <PlaylistListing /> : <VideoList />
        }
      />
    </>
  );
};

export { Home };
