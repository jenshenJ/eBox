import React, { useState } from "react";
import Book from "../entities/Book";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
 ScrollView,
  View,
  Text
} from 'react-native';
import { colors } from "../presets/colors";
import bookTemplates from "../data/bookTemplates";
import BookBlock from "./BookBlock";
import BookCard from "./BookCard";

interface IBookCollectionProps {
  title : string
  bookIds : number[], 
}

export default function BookCollection({title, bookIds} : IBookCollectionProps){
  
    const getBookBlocks = (bookIds : number[]) => {
      let content = [];
      for(let bookId of bookIds){
        for(let i = 0; i < bookTemplates.length; i++){
          if(bookTemplates[i].id == bookId){
            content.push(
              <BookCard key={bookTemplates[i].id} book={bookTemplates[i]}/>
            )
            break;
          }
        }
      }
      return content;
    }

    return(
      <View style={styles.bookCollection}>
        <Text style={styles.collectionTitle}>{title}</Text>
        <ScrollView horizontal={true}>
          {getBookBlocks(bookIds)}
        </ScrollView>
      </View>
    )
}


const styles= StyleSheet.create({
  bookCollection : {
    paddingHorizontal: 24,
    marginBottom: 60,
  },
 
  collectionTitle: {
    color: colors.textMain,
    marginBottom: 15,
    fontSize: 24,
    fontFamily: 'serif',

  },

});
