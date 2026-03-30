import React from 'react';
import { StatusBar, useColorScheme, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import screens
import GameListScreen from './src/screens/GameListScreen';
import GameDetailScreen from './src/screens/GameDetailScreen';
import AddGameScreen from './src/screens/AddGameScreen';
import GamingNewsScreen from './src/screens/GamingNewsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const appStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tabIconStyle: {
    fontSize: 20,
  },
});

// Tab icon components
const CatalogIcon = () => <Text style={appStyles.tabIconStyle}>🎮</Text>;
const AddGameIcon = () => <Text style={appStyles.tabIconStyle}>➕</Text>;
const NewsIcon = () => <Text style={appStyles.tabIconStyle}>📰</Text>;

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
          tabBarIcon: () => <CatalogIcon />,
        }}
      />
      <Tab.Screen
        name="AddGameTab"
        component={AddGameScreen}
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: () => <AddGameIcon />,
        }}
      />
      <Tab.Screen
        name="NewsTab"
        component={GamingNewsScreen}
        options={{
          tabBarLabel: 'Noticias',
          tabBarIcon: () => <NewsIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={appStyles.root}>
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

export default App;
