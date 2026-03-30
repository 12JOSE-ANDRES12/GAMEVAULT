import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/GameDetailStyles';

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Actualizar encabezado según cantidad
    console.log(`Mostrando detalles del juego: ${game.title}`);
  }, [game]);

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getPlatformColor = (platform) => {
    const platformColors = {
      'PS5': '#003087',
      'Xbox Series X': '#107C10',
      'PC': '#FFB900',
      'Nintendo Switch': '#E60012',
    };
    return platformColors[platform] || '#333';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.headerSection}>
            <Text style={styles.emoji}>{game.emoji}</Text>
            <Text style={styles.title}>{game.title}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Plataforma:</Text>
            <Text
              style={[
                styles.value,
                { color: getPlatformColor(game.platform) },
              ]}
            >
              {game.platform}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Género:</Text>
            <Text style={styles.value}>{game.genre}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Clasificación:</Text>
            <Text style={styles.value}>{game.rating}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Precio:</Text>
            <Text style={styles.price}>${game.price.toFixed(2)}</Text>
          </View>

          <View style={styles.ratingSection}>
            <Text style={styles.star}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.ratingText}>5.0 (2,341 reseñas)</Text>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionLabel}>Descripción:</Text>
            <Text style={styles.descriptionText}>{game.description}</Text>
          </View>

          <View style={styles.quantitySection}>
            <Text style={styles.quantityLabel}>
              Cantidad:
            </Text>
            <Pressable
              onPress={handleDecreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>
                −
              </Text>
            </Pressable>
            <Text style={styles.quantityValue}>
              {quantity}
            </Text>
            <Pressable
              onPress={handleIncreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>
                +
              </Text>
            </Pressable>
          </View>

          <View style={styles.actionContainer}>
            <Pressable
              onPress={handleToggleWishlist}
              style={[
                styles.button,
                isInWishlist
                  ? styles.addedToWishlist
                  : styles.wishlistButton,
              ]}
            >
              <Text
                style={
                  isInWishlist
                    ? styles.addedToWishlistText
                    : styles.wishlistButtonText
                }
              >
                {isInWishlist
                  ? '❤️ Agregado a lista de deseos'
                  : '🤍 Agregar a lista de deseos'}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.goBack()}
              style={[styles.button, styles.backButton]}
            >
              <Text style={styles.backButtonText}>← Volver al Catálogo</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;
