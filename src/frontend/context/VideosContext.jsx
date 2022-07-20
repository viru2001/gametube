import { createContext, useContext, useReducer } from "react";
import { videosReducer, videosInitialState } from "../reducers";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    videosInitialState
  );

  //   const getVideos = async () => {
  //     try {
  //       const {
  //         data: { videos },
  //       } = await fetchVideos();
  //       videosDispatch({ type: "FETCH_VIDEOS", payload: videos });
  //     } catch (error) {
  //       showToast("error", "Can't fetch videos. Refresh and try again.");
  //     }
  //   };

  const { videos, searchQuery, categories, selectedCategory } = videosState;

  return (
    <VideosContext.Provider
      value={{
        videos,
        searchQuery,
        categories,
        selectedCategory,
        videosDispatch,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
