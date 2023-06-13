import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


interface IMenuProps {
  selected: string,
}

export function Menu({selected} : IMenuProps) : JSX.Element {
  return(
    <View style={styles.menuBlock}>
      <Text>a</Text> 
      <Text>a</Text> 
      <Text>a</Text> 
      <Text>a</Text> 
      <Text>a</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  menuBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 80,
    borderTopColor: 'grey',
    borderTopWidth: 100,
    zIndex: 10,
    borderTopRightRadius: 40,
    backgroundColor: 'black',
  }
});