import React from "react";
import Book from "../entities/Book";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { colors } from "../presets/colors";
import { RoundedButton } from "./RoundedButton";
import { useNavigation } from "@react-navigation/native";

interface ILatestBookProps {
  book: Book,
  handlePageChanged: CallableFunction, 
  handleOpen: CallableFunction,
}

export default function LatestBook({book, handlePageChanged, handleOpen} : ILatestBookProps){
  let navigation = useNavigation();
  return(
    <View>
      <View style={styles.latestBook}>
          <View  style={styles.wrapper}>
            <Image style={styles.bookCover} source={{uri: book.coverPath}}/>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthorName}>{book.authorName}</Text>
            <Text style={styles.percentage}>{book.percentage + '%'}</Text>
          </View>
      </View>
      <View style={styles.buttonWrapper}>
 
          <RoundedButton text="Продолжить читать" clickHandler={()=>{ handleOpen(book.id, new Date()); ;navigation.navigate('Pdf', {book, handlePageChanged})}} width={180}/>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
  latestBook: {
    overflow: 'visible',
    marginTop: 100,
    backgroundColor: colors.blockBackground,
    borderRadius: 20,
    
    width: '100%',
  },

  wrapper: {
    width: '100%',
    overflow: 'visible',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: colors.textMain,
    fontSize: 18,
  },
  bookCover: {
    borderWidth: 2  ,
    borderColor: colors.textMain,
    marginTop: -100,
    width: 300,
    height: 450,
    borderRadius: 20,
    marginBottom: 20,
  },
  bookTitle: {
    width: 300,
    textAlign: 'center',
    fontFamily: 'serif',
    color: colors.textMain,
    fontSize: 25,
    marginBottom: 15
  },

  bookAuthorName: {
    width: 300,
    textAlign: 'center',
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: colors.textMain,
    fontSize: 20,
    marginBottom: 10,
  },

  percentage: {
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: colors.textMain,
    fontSize: 18,
    marginBottom: 40,
  },
  
  buttonWrapper: {
    marginTop: -35,
    alignSelf: 'center',
  },  

});