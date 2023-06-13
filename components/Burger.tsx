import React from 'react';
import icons from '../icons/icons';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



interface IMenuProps {
  onClick: ((event: GestureResponderEvent) => void),
}

export function Burger({onClick} : IMenuProps) : JSX.Element {
  return(

    <TouchableOpacity activeOpacity = { .5 } onPress={ onClick }>
        <Image source={icons.burger} ></Image>
    </TouchableOpacity>
      
  );
}

const styles = StyleSheet.create({
  imageBlock: {
    width: 24,
    height: 24,
  },
});