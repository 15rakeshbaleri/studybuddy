import mongoose from "mongoose";
const videoPlaylistSchema = new mongoose.Schema(
  {
    playlistId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    video: [
      {
        videoId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const VideoPlaylist = mongoose.model("VideoPlaylist", videoPlaylistSchema);

export default VideoPlaylist;
