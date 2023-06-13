import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Burger } from './Burger';
import { colors } from '../presets/colors';
import icons from '../icons/icons';

interface IMenuItemProps {
  icon: string,
  text: string,
  isSelected: boolean,
}

export function MenuItem({icon, text, isSelected}: IMenuItemProps) : JSX.Element {
  let styles = StyleSheet.create({
    menuItem: {
      height: '100%',
      flex: 1/2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    image: {
      width: 24,
      height: 24,
    },

    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.textMain,
    }
  });
  let icon_source;
  if(isSelected) {
    styles.textStyle.color = colors.menuItemSelected;
    icon_source = (icons as any)[icon + '_selected'];
  }
  else{
    icon_source = (icons as any)[icon];
  }
  return(
    
    <View style={styles.menuItem}>
        <Image style={styles.image} source={icon_source}></Image>
        <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}
