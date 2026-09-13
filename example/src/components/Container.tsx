import { useMemo, type PropsWithChildren } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({ children }: PropsWithChildren) => {
  const insets = useSafeAreaInsets();

  const style: StyleProp<ViewStyle> = useMemo(() => {
    return {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      ...styles.container,
    };
  }, [insets]);

  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Container;
