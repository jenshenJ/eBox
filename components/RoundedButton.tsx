import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../presets/colors';



interface IMenuProps {
  clickHandler: ((event: GestureResponderEvent) => void),
  text: string,
  width: number,
}

export function RoundedButton({clickHandler, text,width} : IMenuProps) : JSX.Element {
  const styles = StyleSheet.create({
    button: {
      height: 60, 
      width: width + 30,
      padding: 15,
      borderRadius: 30,
      color: colors.textMain,
      backgroundColor: colors.menuItemSelected,
    },
    text: {
      color: colors.textMain,
      width: width,
      lineHeight: 30,
      fontSize: 18,
      fontWeight: '500',
    }
  });

  return(

    <TouchableOpacity style={styles.button} activeOpacity = { .7 } onPress={ clickHandler }>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
      
  );
}

