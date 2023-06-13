import React, { useState } from "react";
import Book from "../entities/Book";
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
 
  View,
} from 'react-native';
import { colors } from "../presets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { green100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import bookTemplates from "../data/bookTemplates";


interface IBookCardProps {
  book : Book,
  key : number,
}

export default function BookCard({key, book} : any){
  let navigation = useNavigation();
  const [bookAdded, setBookAdded] = useState(false);

  async function addBook(){
    let books = await AsyncStorage.getItem('books')
    console.log(books)
    if(books !== null){
      books = JSON.parse(books);
      for(b of books){
        if(b.id == book.id){
          setBookAdded(true);
          return;
        }
      }
      book.date = new Date();
      books.unshift(book);
      console.log(books);
     
      //showBottomAlert('success', 'This Title', 'This Message Example Success', () => {});
    
    }
    
    await AsyncStorage.setItem('books', JSON.stringify(books))
    setBookAdded(true);
    // console.log(await AsyncStorage.getItem('books'));
    
  }
  if(!bookAdded){
    return(
      
      <View>
        <TouchableOpacity onPress={addBook} style={styles.container}>
            <Image style={styles.bookCover} source={{uri: book?.coverPath}}/>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    return(
      <View>
        <TouchableOpacity onPress={addBook} style={styles.container}>
            <Image style={styles.bookCoverAdded} source={{uri: book?.coverPath}}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    container : {
      marginRight: 14,
    },
    bookCover: {
    height: undefined,
    width: 144,
    aspectRatio: 2/3,
    borderRadius: 10,
    borderColor: colors.textMain,
    
    borderWidth: 1,
  },
  bookCoverAdded: {
    height: undefined,
    width: 144,
    aspectRatio: 2/3,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: colors.textMain,
    opacity: 0.7
  },


});