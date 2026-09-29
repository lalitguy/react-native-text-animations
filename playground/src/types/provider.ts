import type {
  ColorTrackConfig,
  CustomMode,
  NumericTrackConfig,
  Preset,
  PresetMode,
  StaggerType,
} from ".";

interface NumbericTrackPlayground extends NumericTrackConfig {
  id: string;
}

interface ColorTrackPlayground extends ColorTrackConfig {
  id: string;
}

interface CustomModePlayground extends Omit<CustomMode, "animation"> {
  animation: {
    tracks: (NumbericTrackPlayground | ColorTrackPlayground)[];
  };
}

type PlaygroundAnimatedText = CustomModePlayground | PresetMode;

interface AnimationConfigType extends Omit<
  PlaygroundAnimatedText,
  "preset" | "animation"
> {}

type PlaygroundActions =
  | {
      type: "preset";
      payload: PlaygroundAnimatedText["preset"];
    }
  | {
      type: "updateConfig";
      payload: Partial<AnimationConfigType>;
    }
  | {
      type: "add-track";
      payload: NumbericTrackPlayground | ColorTrackPlayground;
    }
  | {
      type: "update-track";
      payload: {
        id: string;
        track: Partial<NumbericTrackPlayground> | Partial<ColorTrackPlayground>;
      };
    }
  | {
      type: "remove-track";
      payload: {
        /* id to be removed*/
        id: string;
      };
    }
  | {
      type: "stagger";
      payload: {
        key: keyof StaggerType;
        value: StaggerType[keyof StaggerType];
      };
    };

type ConfigHandler = <T extends keyof AnimationConfigType>(
  key: T,
  value: AnimationConfigType[T]
) => void;

type AddTracks = (
  track: NumbericTrackPlayground | ColorTrackPlayground
) => void;

type UpdateTracks = (
  id: string,
  track: Partial<NumbericTrackPlayground> | Partial<ColorTrackPlayground>
) => void;

type RemoveTracks = (id: string) => void;

type StaggerHandler = <K extends keyof StaggerType>(
  key: K,
  value: StaggerType[K]
) => void;

type AddPresetHandler = (payload: Preset) => void;

type ProviderContext = {
  handleConfig: ConfigHandler;
  addPreset: AddPresetHandler;
  addTracks: AddTracks;
  removeTracks: RemoveTracks;
  updateTracks: UpdateTracks;
  updateStagger: StaggerHandler;
  state: PlaygroundAnimatedText;
};

export type {
  AddPresetHandler,
  AddTracks,
  AnimationConfigType,
  ColorTrackPlayground,
  ConfigHandler,
  NumbericTrackPlayground,
  PlaygroundActions,
  PlaygroundAnimatedText,
  ProviderContext,
  RemoveTracks,
  StaggerHandler,
  UpdateTracks,
};
