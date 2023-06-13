import React from "react";
import Book from "../entities/Book";
import { useNavigation } from '@react-navigation/native';

import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from "../presets/colors";
import { RoundedButton } from "./RoundedButton";

interface ILatestBookProps {
  book: Book | undefined,
  percentage: number | undefined,
  handlePageChanged: CallableFunction
  handleOpen: CallableFunction
}

export default function BookBlock({book, percentage, handlePageChanged, handleOpen} : ILatestBookProps){
  let navigation = useNavigation();

  const handleBookPress = () => {
    console.log('clicked');
    console.log(book?.title);
    handleOpen(book?.id, new Date());
    navigation.navigate('Pdf', {book, handlePageChanged});
  };

  
  return(
    <View>
      <TouchableOpacity activeOpacity={.7} style={styles.latestBook} onPress={handleBookPress}>
          <View  style={styles.wrapper}>
            <Image style={styles.bookCover} source={{uri: book.coverPath}}/>
            <View style={styles.textWrapper}>
              <View>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthorName}>{book.authorName}</Text>
              </View>
              <Text style={styles.percentage}>{percentage + '%'}</Text>
            </View>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  latestBook: {
    backgroundColor: colors.blockBackground,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
    padding: 20,
  },

  wrapper: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  },

  
  bookCover: {
    height: undefined,
    width: 120,
    aspectRatio: 2/3,
    borderRadius: 10,
    borderColor: colors.textMain,
    
    borderWidth: 1,
  },
  textWrapper: {
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bookTitle: {
    maxWidth: 200,
    fontFamily: 'serif',
    color: colors.textMain,
    fontSize: 18,
    marginBottom: 5
  },
 
  bookAuthorName: {
    maxWidth: 200,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: colors.textMain,
    fontSize: 16,
  },

  percentage: {
    fontFamily: 'serif',
    fontStyle: 'italic',  
    color: colors.textMain,
    fontSize: 18,
    textAlign: 'center',  
  },
  
  buttonWrapper: {
    marginTop: -35,
    alignSelf: 'center',
  },  

});