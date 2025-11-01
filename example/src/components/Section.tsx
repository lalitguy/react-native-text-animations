import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Section({
  title,
  children,
  onPress,
}: {
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity style={styles.sectionContent} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: { marginBottom: 50 },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  sectionContent: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});
