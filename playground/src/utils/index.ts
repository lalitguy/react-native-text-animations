import type {
  ColorTrackPlayground,
  NumbericTrackPlayground,
  PlaygroundActions,
  PlaygroundAnimatedText,
} from "../types";

const playgroundReducer = (
  state: PlaygroundAnimatedText,
  action: PlaygroundActions
): PlaygroundAnimatedText => {
  switch (action.type) {
    case "updateConfig":
      return {
        ...state,
        ...action.payload,
      };
    case "preset":
      return {
        ...state,
        preset: action.payload,
        animation: undefined as never,
      };
    case "add-track":
      return {
        ...state,
        preset: undefined as never,
        animation: {
          tracks: [...(state.animation?.tracks ?? []), action.payload],
        },
      };
    case "update-track":
      const tracks = state.animation?.tracks.length
        ? state.animation.tracks.map((track) => {
            if (track.id === action.payload.id) {
              return {
                ...track,
                ...action.payload.track,
              } as NumbericTrackPlayground | ColorTrackPlayground;
            }
            return track;
          })
        : [];
      return {
        ...state,
        preset: undefined as never,
        animation: {
          tracks,
        },
      };
    case "remove-track": {
      const finalTracks = state.animation?.tracks.length
        ? state.animation?.tracks.filter(
            (track) => track.id !== action.payload.id
          )
        : [];
      return {
        ...state,
        preset: undefined as never,
        animation: {
          tracks: finalTracks,
        },
      };
    }
    case "stagger": {
      return {
        ...state,
        stagger: {
          ...state.stagger,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    default:
      return state;
  }
};

export { playgroundReducer };
