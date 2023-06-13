import React, { useState, Dispatch, useRef, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Book from "../entities/Book";
import Pdf from 'react-native-pdf'

import { colors } from "../presets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function PdfView({route} : any) {
  const pdfRef = useRef(null);
  const {book, handlePageChanged} = route.params;  
  const uri = book.filePath;
//   console.log(uri);
  console.log(book.title);
  console.log(uri);

  
  return (
    <View style={styles.container}>
        <Pdf
            ref={pdfRef}
            horizontal={true}
            enablePaging={true}
            trustAllCerts={false}
            enableRTL={true}
            
            enableAnnotationRendering={true}
           page={book.currentPage}
            source={{uri: uri}}
            onLoadComplete={(numberOfPages,filePath) => {
              console.log(uri);
                console.log(`Number of pages: ${numberOfPages}`);
                console.log(`file path: ${filePath}`);
                
                
            }}
            // onPageChanged={(page,numberOfPages) => {
            //     console.log(`Current page: ${page}`);
                
            // }}
            onPageChanged={handlePageChanged.bind(null ,book.id)}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => { 
                console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: colors.backgroundMain
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      backgroundColor: colors.backgroundMain
  }
});