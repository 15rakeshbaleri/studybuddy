import mongoose, { get } from "mongoose";
import express from "express";

import { createVideoPlaylist, getVideoPlaylistById,getAllPlaylist } from "../controllers/video.controller.js";

const router = express.Router();

router.get("/:playlistid",getVideoPlaylistById);
router.post("/",createVideoPlaylist)
router.get("/",getAllPlaylist)

export default router;
