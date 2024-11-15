import VideoPlaylist from "../model/video.model.js";


export const createVideoPlaylist = async (req, res) => {
    try {
      const { playlistId,title, description, video } = req.body;
      const videoPlaylist = new VideoPlaylist({ playlistId,title, description, video });
      await videoPlaylist.save();
      res.status(201).json(videoPlaylist);
    } catch (error) {
      console.error("Error creating video playlist:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getVideoPlaylistById = async (req, res) => {
    try {
      const videoPlaylist = await VideoPlaylist.findOne({playlistId: req.params.playlistid});
      if (!videoPlaylist) {
        return res.status(404).json({ error: "Video playlist not found" });
      }
      res.json(videoPlaylist);
    } catch (error) {
      console.error("Error getting video playlist:", error);
      res.status(500).json({ error: error.message });
    }
  };
  export const getAllPlaylist=async(req,res)=>{
    try {
      const videoPlaylist = await VideoPlaylist.find({});
      if (!videoPlaylist) {
        return res.status(404).json({ error: "Video playlist not found" });
      }
      res.json(videoPlaylist);
    } catch (error) {
      console.error("Error getting video playlist:", error);
      res.status(500).json({ error: error.message });
    }
  };