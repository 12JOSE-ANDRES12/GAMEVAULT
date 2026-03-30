import { StyleSheet } from 'react-native';

const GameListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: '85%',
  },
  emoji: {
    fontSize: 28,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  platformBadge: {
    backgroundColor: '#e8f4f8',
  },
  platformText: {
    color: '#0288d1',
    fontSize: 12,
    fontWeight: 'bold',
  },
  genreBadge: {
    backgroundColor: '#f3e5f5',
  },
  genreText: {
    color: '#7b1fa2',
    fontSize: 12,
    fontWeight: 'bold',
  },
  pressable: {
    opacity: 0.8,
  },
});

export default GameListStyles;
