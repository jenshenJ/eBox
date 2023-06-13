import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';


import Library from '../screens/Library';
import Settings from '../screens/Settings';
import MyBooksScreen from '../screens/MyBooksScreen';
import PdfView from '../screens/PdfView';
import { colors } from '../presets/colors';
import { MenuItem } from '../components/MenuItem';
import icons from '../icons/icons';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


interface ITabScreenIconProps {
  focused: boolean,
  color: string,
  size: number, 
}

const  Tabs = () : JSX.Element => {
  return(  
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
        tabBarStyle: {
          position: 'absolute',
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 0,
          height: 50,
          gap: 0,
          zIndex: 10,
          backgroundColor: colors.backgroundMain,
          borderTopWidth: 0,
        }
      }}
    >
      <Tab.Screen name="Мои книги" component={MyBooksScreen} options={{
        tabBarIcon: ({focused} : ITabScreenIconProps) : ReactNode => {
          return(
            <MenuItem text='Мои книги' icon={'book'} isSelected={focused}/>
          )
        }
      }} />
      <Tab.Screen name="Библиотека" component={Library}  options={{
        tabBarIcon: ({focused} : ITabScreenIconProps) : ReactNode => {
          return(
            <MenuItem text='Библиотека' icon={'library'} isSelected={focused}/>
          )
        }
      }}/>
      {/* <Tab.Screen name="Настройки" component={Settings} options={{
        tabBarIcon: ({focused} : ITabScreenIconProps) : ReactNode => {
          return(
            <MenuItem text='Настройки' icon={'settings'} isSelected={focused}/>
          )
        }
      }}
      /> */}
      
    </Tab.Navigator>
  )
}

const RootNavigator = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Pdf" component={PdfView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;  