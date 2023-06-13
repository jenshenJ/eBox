import React, { useState, Dispatch } from "react";
import { View, Text, StyleSheet, Dimensions} from "react-native";
import Book from "../entities/Book";
import Pdf from 'react-native-pdf'
import { Title } from "../components/Title";
import { colors } from "../presets/colors";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookCard from "../components/BookCard";
import bookTemplates from "../data/bookTemplates";
import BookCollection from "../components/BookCollection";


export default function Library() {
  return (
    <View style={styles.app}>
      <ScrollView>
      <Text style={styles.title}>Библиотека</Text>
      <BookCollection bookIds={[0, 1, 2, 3, 4, 5]} title="Лучшее от редакции"/>
      <BookCollection bookIds={[6, 7, 8, 9, 10, 11, 12]} title="Мировая классика"/>
      <BookCollection bookIds={[13, 14, 15, 16, 17, 18, 19]} title="Люмос"/>
      <BookCollection bookIds={[20, 21, 22, 23, 24, 25, 26, 27]} title="Что почитать"/>
      <BookCollection bookIds={[1, 2, 3]} title="абв"/>

      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
   
  
    backgroundColor: colors.backgroundMain,
  },
 
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 30,
    paddingHorizontal: 24,
    textAlign: 'left',
    color: colors.textMain,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
    padding: 10,
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonWrapper: {
    marginTop: -35,
    alignSelf: 'center',
  },

  highlight: {
    fontWeight: '700',
  },
  h1: {
    backgroundColor: '#BEFCE5',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
  },
});
