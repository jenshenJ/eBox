/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, TabActions} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { LogBox, NativeModules } from 'react-native';

import RootNavigator from './navigation/tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';


const listFilesAndFolders = async () => {
  
  try {
    const items = await RNFS.readDir('file:///android_asset');
    items.forEach(item => {
      if (item.isDirectory()) {
        console.log('Папка: ' + item.name);
      } else {
        console.log('Файл: ' + item.name);
      }
    });
  } catch (error) {
    console.error(error);
  }
};


// Вызовите функцию для получения списка файлов и папок


// import PDFView from 'react-native-view-pdf';

function App(): JSX.Element {
  LogBox.ignoreAllLogs();
  return(
      <RootNavigator/>
  );
}


export default App;
