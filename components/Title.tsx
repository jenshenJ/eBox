import React from "react";
import { StyleSheet, Text } from "react-native";



interface ITitleProps {
  title: string,
}
const titleStyle= StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  }
})

export function Title({title} : ITitleProps) {
  return(
    <Text style={titleStyle.title}>{title}</Text>
  );
}


