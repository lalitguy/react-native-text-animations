import type {
  AnimatedTextProps,
  ColorTrackConfig,
  CustomMode,
  NumericTrackConfig,
  Preset,
  PresetMode,
} from '.';

interface NumbericTrackPlayground extends NumericTrackConfig {
  id: string;
}

interface ColorTrackPlayground extends ColorTrackConfig {
  id: string;
}

interface CustomModePlayground extends Omit<CustomMode, 'animation'> {
  animation: {
    tracks: (NumbericTrackPlayground | ColorTrackPlayground)[];
  };
}

type PlaygroundAnimatedText = CustomModePlayground | PresetMode;

interface AnimationConfigType extends Omit<
  AnimatedTextProps,
  'preset' | 'animation'
> {}

type PlaygroundActions =
  | {
      type: 'preset';
      payload: AnimatedTextProps['preset'];
    }
  | {
      type: 'updateConfig';
      payload: Partial<AnimationConfigType>;
    }
  | {
      type: 'add-track';
      payload: NumbericTrackPlayground | ColorTrackPlayground;
    }
  | {
      type: 'update-track';
      payload: {
        id: string;
        track: Partial<NumbericTrackPlayground> | Partial<ColorTrackPlayground>;
      };
    }
  | {
      type: 'remove-track';
      payload: {
        /* id to be removed*/
        id: string;
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

type AddPresetHandler = (payload: Preset) => void;

type ProviderContext = {
  handleConfig: ConfigHandler;
  addPreset: AddPresetHandler;
  addTracks: AddTracks;
  removeTracks: RemoveTracks;
  updateTracks: UpdateTracks;
  state: AnimatedTextProps;
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
  UpdateTracks,
};
