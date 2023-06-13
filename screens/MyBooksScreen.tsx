import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {colors} from '../presets/colors';
import Book from '../entities/Book';
import LatestBook from '../components/LatestBook';
import BookBlock from '../components/BookBlock';
import BookProgressContext from '../contexts/BookProgressContext';
import bookTemplates from '../data/bookTemplates';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const saveBooks = async (books : Book[]) => {
  try {
    const bookJson = JSON.stringify(books);
    await AsyncStorage.setItem('books', bookJson);
    console.log(bookJson);
    console.log('books updated');
  }
  catch (error) {
    console.log(error);
  }
}


export default function MyBooksScreen({navigation} : any): JSX.Element {
  //AsyncStorage.clear();


  const [books, setBooks] = useState([]); 
  const [latestBookId, setLatestBookId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

 
  useFocusEffect(
    React.useCallback(() => {
      const loadBooks = async () => {
        try {
          setIsLoading(true);
          let newBooks = await AsyncStorage.getItem('books');

          if (newBooks !== null) {    
            console.log(JSON.parse(newBooks).map((book) => {return book.title + ' ' + book.lastOpened}))      
            setBooks(JSON.parse(newBooks));
          }
        
          
          console.log('Books loaded');
        } catch (error) {
          console.error('Error loading books:', error);
        }
        setIsLoading(false);
        
      };

      loadBooks();
      
      
    }, [])
  );


  function getBooksContent(){
  
    let content = [];
    for(let i = 1; i < books.length; i++){
      
      content.push( <BookBlock
        key={i}
        book={books[i]}
        percentage={books[i]?.percentage}
        handlePageChanged={handlePageChanged}
        handleOpen={updateBookDate}
      />);
    }
    return content;
  }

  

  const handlePageChanged =  (bookId : number, currentPage : number, totalPages : number) => {
    setBooks(books.map((book) => {
      if(bookId === book.id){
        let newBook = book;
        newBook.percentage = Math.floor(currentPage * 100 / totalPages);
        newBook.currentPage = currentPage;
        return newBook;
      }
      else {
        return book;
      }
    }));
    updateBookDate(bookId, new Date());
  } 

  const updateBookDate = (bookId : number, time : Date) => {
    let newBooks = books.map((book) => {
      if(book.id !== bookId){
        return book;
      }
      else {
        let newBook = book;
        newBook.lastOpened = time;
        return newBook;
      };
    })        
    newBooks = newBooks.sort((a, b) => {
      if(a.lastOpened.toString() > b.lastOpened.toString()) return -1;
      else if (a.lastOpened.toString() === b.lastOpened.toString()) return 0;
      else return 1;
    });
    saveBooks(newBooks);
    setBooks(newBooks);
    
  };

  const getLastBook = () => {
    return books.reduce((latest : Book, book : Book) => {
      if(latest.lastOpened.toString() > book.lastOpened.toString()) return latest;
      else return book;
    }, books[0]);
  }
  if(isLoading){
    return(
      <View></View>
    );
  }

  if(!books.length) {
    saveBooks([])
    return(
      <View style={styles.noBooks}>
        <Text style={styles.noBooksText}>У вас пока нет книr{'\n'}Перейдите в библиотеку</Text>

      </View>
    )
  }

  return (
    <View style={styles.app}>
      <ScrollView style={styles.wrapper}>
        <LatestBook book={books[0]}         
                    handlePageChanged={handlePageChanged}
                    handleOpen={updateBookDate}/>
        
        {books.length > 1 && 
          <>
          <Text style={styles.title}>Другие книги</Text>
          <View>
          {getBooksContent()}
          </View>
          </>
        }
        
      </ScrollView>

    </View>

   
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
   
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundMain,
  },
  noBooks: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundMain,
    display: 'flex',
    height: '100%',
  },
  noBooksText: {
    textAlign: 'center',
    color: colors.textMain,
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
    color: colors.textMain,
    fontFamily: 'Roboto',
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
