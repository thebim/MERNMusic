import { ADD_TRACK_TO_QUEUE, REMOVE_TRACK_FROM_QUEUE, PLAY_TRACK } from "../actionTypes";

export const addTrackToQueue = track => ({
  type: ADD_TRACK_TO_QUEUE,
  payload: track
});

export const removeTrackFromQueue = trackIndex => ({
  type: REMOVE_TRACK_FROM_QUEUE,
  index: trackIndex
});

export const playTrack = track => ({
  type: PLAY_TRACK,
  payload: track
});