import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/GameListStyles';

const GAME_DATA = [
  {
    id: 1,
    title: 'Elden Ring',
    platform: 'PS5',
    genre: 'RPG',
    price: 59.99,
    rating: 'M',
    emoji: '⚔️',
    description:
      'Sumérgete en un mundo de fantasía oscura donde la muerte es constante.',
  },
  {
    id: 2,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    platform: 'Nintendo Switch',
    genre: 'Aventura',
    price: 69.99,
    rating: 'E10',
    emoji: '🗡️',
    description: 'Continúa la épica aventura en el reino de Hyrule.',
  },
  {
    id: 3,
    title: 'Cyberpunk 2077',
    platform: 'PC',
    genre: 'RPG',
    price: 49.99,
    rating: 'M',
    emoji: '🤖',
    description: 'Vive la vida como un mercenario en el futuro distópico.',
  },
  {
    id: 4,
    title: 'FIFA 24',
    platform: 'Xbox Series X',
    genre: 'Deportes',
    price: 59.99,
    rating: 'E3',
    emoji: '⚽',
    description: 'El simulador de fútbol más realista jamás creado.',
  },
  {
    id: 5,
    title: 'Baldur\'s Gate 3',
    platform: 'PS5',
    genre: 'RPG',
    price: 59.99,
    rating: 'M',
    emoji: '🐉',
    description: 'Un épico juego de rol basado en Dungeons & Dragons.',
  },
  {
    id: 6,
    title: 'Starfield',
    platform: 'Xbox Series X',
    genre: 'Acción',
    price: 69.99,
    rating: 'M',
    emoji: '🚀',
    description: 'Explora el espacio en esta aventura de ciencia ficción.',
  },
  {
    id: 7,
    title: 'Palworld',
    platform: 'PC',
    genre: 'Aventura',
    price: 29.99,
    rating: 'T',
    emoji: '🐾',
    description: 'Un emocionante mundo lleno de criaturas mágicas.',
  },
  {
    id: 8,
    title: 'Tekken 8',
    platform: 'PS5',
    genre: 'Lucha',
    price: 59.99,
    rating: 'T',
    emoji: '👊',
    description: 'Lucha contra los mejores contrincantes del mundo.',
  },
];

const GameListScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos desde una API
    const loadGames = () => {
      setTimeout(() => {
        setGames(GAME_DATA);
        setIsLoading(false);
      }, 1500);
    };

    loadGames();
  }, []);

  const renderGameCard = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('GameDetail', {
          game: item,
        })
      }
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressable,
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.infoRow}>
        <View style={[styles.badge, styles.platformBadge]}>
          <Text style={styles.platformText}>{item.platform}</Text>
        </View>
        <View style={[styles.badge, styles.genreBadge]}>
          <Text style={styles.genreText}>{item.genre}</Text>
        </View>
      </View>
    </Pressable>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              color: '#666',
            }}
          >
            Cargando catálogo...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderGameCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default GameListScreen;
