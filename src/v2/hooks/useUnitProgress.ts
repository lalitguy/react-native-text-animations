import { useEffect } from 'react';
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type {
  AnimationConfig,
  LoopConfig,
  StaggerType,
  Transition,
} from '../types';
import { resolveDelay, resolveTransition } from '../utils';

type useUnitProgressProps = {
  animation: AnimationConfig;
  transition: Transition;
  index: number;
  textLength: number;
  stagger: StaggerType;
  duration: number;
  delay: number;
  loop: LoopConfig;
};

const useUnitProgress = ({
  animation,
  transition,
  index,
  stagger,
  textLength,
  duration,
  delay,
  loop,
}: useUnitProgressProps) => {
  const progress = useSharedValue(0);

  //calculate overall duration of animation considering the stagger gap and per letter duration.
  const staggerDelay = stagger.gap ?? 100;

  const unitRepeatCount = animation?.repeat ?? 1;

  const repeatDuration = duration * (unitRepeatCount > 0 ? unitRepeatCount : 1);
  const unitDelay = resolveDelay(index, stagger, textLength) + delay;

  const cycleDuration =
    (textLength - 1) * staggerDelay + repeatDuration + delay;

  const cycleWait = cycleDuration - (unitDelay + repeatDuration);

  console.log({
    index,
    unitDelay,
    repeatDuration,
    cycleDuration,
    cycleWait,
  });

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withDelay(
          unitDelay,
          withRepeat(
            resolveTransition(duration, transition),
            animation.repeat ?? 1
          )
        ),
        withDelay(cycleWait, withTiming(0, { duration: 0 }))
      ),
      loop.count ?? 1
    );
  }, [
    progress,
    unitDelay,
    duration,
    transition,
    animation.repeat,
    loop.count,
    cycleDuration,
    cycleWait,
  ]);

  return progress;
};

export { useUnitProgress };
