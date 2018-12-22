import { PLAY_TRACK, ADD_TRACK_TO_QUEUE, REMOVE_TRACK_FROM_QUEUE } from "../actionTypes";

const initialState = {
  currentTrack: {},
  trackQueue: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        currentTrack: action.payload
      };
    case ADD_TRACK_TO_QUEUE:
      return {
        ...state,
        trackQueue: [...state.trackQueue, action.payload]
      };
    case REMOVE_TRACK_FROM_QUEUE:
      return {
        ...state,
        trackQueue: [...state.trackQueue].splice(0, 0)
      };
  }
};