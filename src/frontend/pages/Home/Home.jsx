import React from "react";
import { Drawer, VideoList } from "../../components";

const Home = () => {
  return (
    <>
      <Drawer content={<VideoList />} />
    </>
  );
};

export { Home };
