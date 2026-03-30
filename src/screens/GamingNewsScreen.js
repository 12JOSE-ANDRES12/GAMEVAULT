import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/GamingNewsStyles';
import GAMING_NEWS from '../data/gamingNewsData';

const GamingNewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsMessage, setNewsMessage] = useState('');

  // useEffect with empty array + cleanup function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GAMING_NEWS.length);
    }, 5000);

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect with dependency array
  useEffect(() => {
    const message = `Noticia ${currentIndex + 1} de ${GAMING_NEWS.length}`;
    setNewsMessage(message);
    console.log(message);
  }, [currentIndex]);

  const handleNextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % GAMING_NEWS.length);
  };

  const currentNews = GAMING_NEWS[currentIndex];

  const renderIndicatorDots = () => {
    return GAMING_NEWS.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          currentIndex === index && styles.activeDot,
        ]}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.newsCard}>
          <Text style={styles.emoji}>{currentNews.emoji}</Text>
          <Text style={styles.title}>{currentNews.title}</Text>
          <Text style={styles.description}>{currentNews.description}</Text>

          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{newsMessage}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={handleNextNews}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>Siguiente Noticia →</Text>
            </Pressable>
          </View>

          <View style={styles.indicatorDots}>
            {renderIndicatorDots()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;
