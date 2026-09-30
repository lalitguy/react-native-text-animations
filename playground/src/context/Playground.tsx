import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { initalPlayGround } from "../constants";
import type {
  AddTrack,
  ConfigHandler,
  Preset,
  ProviderContext,
  RemoveTrack,
  StaggerHandler,
  UpdateTrack,
} from "../types";
import { playgroundReducer } from "../utils";

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

  const addTrack: AddTrack = useCallback((track) => {
    dispatch({
      type: "add-track",
      payload: track,
    });
  }, []);

  const removeTrack: RemoveTrack = useCallback((id) => {
    dispatch({
      type: "remove-track",
      payload: { id },
    });
  }, []);

  const updateTrack: UpdateTrack = useCallback((id, track) => {
    dispatch({
      type: "update-track",
      payload: { id, track },
    });
  }, []);

  const updateStagger: StaggerHandler = useCallback((key, value) => {
    dispatch({
      type: "stagger",
      payload: { key, value },
    });
  }, []);

  const value: ProviderContext = useMemo(
    () => ({
      handleConfig,
      addTrack,
      removeTrack,
      updateTrack,
      addPreset,
      updateStagger,
      state,
    }),
    [
      handleConfig,
      addTrack,
      removeTrack,
      updateTrack,
      addPreset,
      updateStagger,
      state,
    ]
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
