import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Picker,
} from 'react-native';
import styles from '../styles/AddGameStyles';

const PLATFORMS = ['PS5', 'Xbox Series X', 'PC', 'Nintendo Switch'];
const GENRES = ['Acción', 'Aventura', 'RPG', 'Deportes', 'Estrategia'];
const AGE_RATINGS = ['E', 'E10', 'T', 'M', 'AO'];

const AddGameScreen = () => {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [genre, setGenre] = useState(GENRES[0]);
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState(AGE_RATINGS[0]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validar formulario en tiempo real
    const validateForm = () => {
      const isValidPrice =
        price !== '' && !isNaN(parseFloat(price)) && parseFloat(price) > 0;
      const isComplete =
        title.trim() !== '' &&
        platform !== '' &&
        genre !== '' &&
        isValidPrice &&
        ageRating !== '';

      setIsFormValid(isComplete);
    };

    validateForm();
  }, [title, platform, genre, price, ageRating]);

  const handleAddGame = () => {
    const priceValue = parseFloat(price);

    if (!isFormValid) {
      Alert.alert(
        'Formulario Incompleto',
        'Por favor completa todos los campos correctamente.'
      );
      return;
    }

    Alert.alert(
      'Juego Agregado Exitosamente',
      `Nuevo Juego Registrado:\n\n` +
        `Título: ${title}\n` +
        `Plataforma: ${platform}\n` +
        `Género: ${genre}\n` +
        `Precio: $${priceValue.toFixed(2)}\n` +
        `Clasificación: ${ageRating}`,
      [{ text: 'OK' }]
    );
  };

  const handleClear = () => {
    setTitle('');
    setPlatform(PLATFORMS[0]);
    setGenre(GENRES[0]);
    setPrice('');
    setAgeRating(AGE_RATINGS[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContent}>
            <View style={styles.card}>
              <Text style={styles.label}>Título del Juego *</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: The Legend of Zelda"
                placeholderTextColor="#999"
                value={title}
                onChangeText={setTitle}
              />

              <Text style={styles.label}>Plataforma *</Text>
              <Picker
                selectedValue={platform}
                onValueChange={(itemValue) => setPlatform(itemValue)}
                style={styles.picker}
              >
                {PLATFORMS.map((p) => (
                  <Picker.Item key={p} label={p} value={p} />
                ))}
              </Picker>

              <Text style={styles.label}>Género *</Text>
              <Picker
                selectedValue={genre}
                onValueChange={(itemValue) => setGenre(itemValue)}
                style={styles.picker}
              >
                {GENRES.map((g) => (
                  <Picker.Item key={g} label={g} value={g} />
                ))}
              </Picker>

              <Text style={styles.label}>Precio (USD) *</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: 59.99"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"
                value={price}
                onChangeText={setPrice}
              />

              <Text style={styles.label}>Clasificación de Edad *</Text>
              <Picker
                selectedValue={ageRating}
                onValueChange={(itemValue) => setAgeRating(itemValue)}
                style={styles.picker}
              >
                {AGE_RATINGS.map((rating) => (
                  <Picker.Item key={rating} label={rating} value={rating} />
                ))}
              </Picker>

              <Text style={{ fontSize: 12, color: '#999', marginTop: 12 }}>
                * Los campos marcados son obligatorios
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                onPress={handleAddGame}
                disabled={!isFormValid}
                style={[
                  styles.button,
                  isFormValid ? styles.submitButton : styles.disabledButton,
                ]}
              >
                <Text
                  style={
                    isFormValid
                      ? styles.submitButtonText
                      : styles.disabledButtonText
                  }
                >
                  ✓ Agregar Juego
                </Text>
              </Pressable>

              <Pressable
                onPress={handleClear}
                style={[styles.button, styles.clearButton]}
              >
                <Text style={styles.clearButtonText}>🗑️ Limpiar</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;
