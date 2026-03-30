import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import screens
import GameListScreen from './src/screens/GameListScreen';
import GameDetailScreen from './src/screens/GameDetailScreen';
import AddGameScreen from './src/screens/AddGameScreen';
import GamingNewsScreen from './src/screens/GamingNewsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Catalog
const CatalogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="GameList"
        component={GameListScreen}
        options={{
          headerTitle: '🎮 Catálogo de Juegos',
        }}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        options={{
          headerTitle: '📋 Detalles del Juego',
        }}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator with all tabs
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e0e0e0',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="CatalogTab"
        component={CatalogStack}
        options={{
          tabBarLabel: 'Catálogo',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20 }}>🎮</Text>
          ),
        }}
      />
      <Tab.Screen
        name="AddGameTab"
        component={AddGameScreen}
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20 }}>➕</Text>
          ),
        }}
      />
      <Tab.Screen
        name="NewsTab"
        component={GamingNewsScreen}
        options={{
          tabBarLabel: 'Noticias',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20 }}>📰</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="#fff"
        />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

import { Text } from 'react-native';

export default App;
