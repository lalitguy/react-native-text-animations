import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type {
  ConfigHandler,
  ProviderContext,
  AddTracks,
  RemoveTracks,
  UpdateTracks,
  Preset,
} from "../types";
import { playgroundReducer } from "../utils";
import { initalPlayGround } from "../constants";

const PlaygroudContext = createContext<ProviderContext | undefined>(undefined);

export const Playgroud = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(playgroundReducer, initalPlayGround);

  const handleConfig: ConfigHandler = useCallback((key, value) => {
    dispatch({
      type: "updateConfig",
      payload: { [key]: value },
    });
  }, []);

  const addPreset = useCallback((preset: Preset) => {
    dispatch({
      type: "preset",
      payload: preset,
    });
  }, []);

  const addTracks: AddTracks = useCallback((track) => {
    dispatch({
      type: "add-track",
      payload: track,
    });
  }, []);

  const removeTracks: RemoveTracks = useCallback((id) => {
    dispatch({
      type: "remove-track",
      payload: { id },
    });
  }, []);

  const updateTracks: UpdateTracks = useCallback((id, track) => {
    dispatch({
      type: "update-track",
      payload: { id, track },
    });
  }, []);

  const value: ProviderContext = useMemo(
    () => ({
      handleConfig,
      addTracks,
      removeTracks,
      updateTracks,
      addPreset,
      state,
    }),
    [handleConfig, addTracks, removeTracks, updateTracks, addPreset, state]
  );

  return (
    <PlaygroudContext.Provider value={value}>
      {children}
    </PlaygroudContext.Provider>
  );
};

export const usePlayground = () => {
  const context = useContext(PlaygroudContext);
  if (!context) {
    throw new Error("usePlayground must be used within Playgroud");
  }
  return context;
};
