# GameVault App

## Descripción del Proyecto

GameVault es una aplicación móvil desarrollada con **React Native CLI** que funciona como una tienda de videojuegos. La aplicación permite a los usuarios explorar un catálogo de juegos disponibles, consultar detalles completos de cada título, agregar nuevos videojuegos al catálogo mediante un formulario, y acceder a una sección de noticias gaming que se actualiza automáticamente.

## Autor(es)

**Nombre del Estudiante:** [Jerson]

## Descripción General (2-3 líneas)

GameVault es una tienda de videojuegos moderna que integra de forma completa los conceptos de navegación (Stack y Tabs), paso de parámetros entre pantallas, y los hooks useState y useEffect de React. La app simula una experiencia de compra y exploración de videojuegos con noticias en tiempo real.

## Arquitectura y Navegación

### Estructura de Navegación
- **Tab Navigation (Nivel Principal):**
  - 🎮 **Catálogo:** Explorar juegos disponibles (con Stack Navigation)
  - ➕ **Agregar:** Formulario para publicar nuevos juegos
  - 📰 **Noticias:** Sección de noticias gaming con actualización automática

### Stack Navigation
- **GameListScreen → GameDetailScreen:** Navegar del catálogo al detalle del juego con parámetros

## Pantallas y Características

### 1. GameListScreen (Catálogo)
- Lista de videojuegos disponibles con tarjetas visuales
- Indicador de carga (ActivityIndicator) simulando API
- Navegación a detalles al hacer clic en una tarjeta
- Usa `useState` para el arreglo de juegos
- Usa `useEffect` con array vacío para cargar datos iniciales
- Muestra: título, plataforma, género, emoji representativo

### 2. GameDetailScreen (Detalles)
- Visualización completa de información del juego
- Campos: título, plataforma, género, precio, clasificación, descripción
- Toggle de lista de deseos (botón interactivo)
- Contador de cantidad a comprar
- Botón de volver al catálogo
- Usa `route.params` para recibir datos del juego
- Usa `useEffect` con dependencias
- Usa `useState` para wishlist y cantidad

### 3. AddGameScreen (Agregar Juego)
- Formulario completo con 5 campos obligatorios:
  - Título del juego (TextInput)
  - Plataforma (Picker: PS5, Xbox Series X, PC, Nintendo Switch)
  - Género (Picker: Acción, Aventura, RPG, Deportes, Estrategia)
  - Precio (TextInput numérico)
  - Clasificación de Edad (Picker: E, E10, T, M, AO)
- Validación en tiempo real con `useEffect`
- Botones: "Agregar Juego" y "Limpiar"
- Alert con resumen de datos ingresados
- KeyboardAvoidingView para evitar que el teclado tape campos
- Usa múltiples `useState` (formulario controlado)

### 4. GamingNewsScreen (Noticias)
- Muestra noticias del mundo gaming
- Rotación automática cada 5 segundos
- Botón manual para avanzar a la siguiente noticia
- Indicador visual: "Noticia X de Y"
- Indicadores gráficos (dots) de progreso
- Mínimo 6 noticias almacenadas en `gamingNewsData.js`
- Usa `useEffect` con cleanup para `setInterval`
- Usa `useEffect` con dependencias
- Usa `useState` para índice actual y mensaje

## Requisitos de Código y Buenas Prácticas

✅ **Idioma:** Todo el código en inglés (variables, funciones, componentes)  
✅ **Indentación:** 2 espacios consistentes  
✅ **Nomenclatura:**
  - PascalCase para componentes: `GameListScreen`
  - camelCase para variables: `gameTitle`, `handleSubmit`
  - UPPER_SNAKE_CASE para constantes: `MAX_NEWS_ITEMS`  

✅ **Estilos:** Archivos separados en carpeta `src/styles/` usando `StyleSheet.create()`  
✅ **Componentes:** Solo funcionales con hooks (sin componentes de clase)  
✅ **Imports:** Organizados (dependencias externas → navegación → archivos locales)  
✅ **SafeAreaView:** Todas las pantallas envueltas en SafeAreaView  
✅ **Sin código muerto:** Sin imports, variables ni bloques comentados sin usar  

## Tecnologías Utilizadas

- **React Native:** 0.84.1
- **React:** 19.2.3
- **TypeScript:** 5.8.3
- **React Navigation:**
  - @react-navigation/native
  - @react-navigation/bottom-tabs
  - @react-navigation/stack
- **Otros:**
  - react-native-safe-area-context
  - react-native-screens
  - react-native-gesture-handler

## Instrucciones de Instalación

### Requisitos Previos
- Node.js >= 22.11.0
- npm o yarn
- Android SDK (para Android)
- Xcode (para iOS)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd GAMEVAULT

# 2. Instalar dependencias
npm install

# 3. (iOS solamente) Instalar pods
cd ios
pod install
cd ..

# 4. Limpiar caché
npm start -- --reset-cache
```

## Instrucciones de Ejecución

### Ejecutar en Android
```bash
npm run android
```

### Ejecutar en iOS
```bash
npm run ios
```

### Iniciar Metro Bundler (opcional)
```bash
npm start
```

## Estructura del Proyecto

```
GAMEVAULT/
├── src/
│   ├── screens/
│   │   ├── GameListScreen.js          # Catálogo de juegos
│   │   ├── GameDetailScreen.js        # Detalle del juego
│   │   ├── AddGameScreen.js           # Formulario de agregar juego
│   │   └── GamingNewsScreen.js        # Noticias gaming
│   ├── styles/
│   │   ├── GameListStyles.js          # Estilos del catálogo
│   │   ├── GameDetailStyles.js        # Estilos del detalle
│   │   ├── AddGameStyles.js           # Estilos del formulario
│   │   └── GamingNewsStyles.js        # Estilos de noticias
│   └── data/
│       └── gamingNewsData.js          # Datos de noticias
├── App.tsx                             # Componente principal con navegación
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
└── README.md
```

## Conceptos Clave Implementados

### useState
- Manejo de múltiples estados en formularios
- Estados locales de componentes (carga, wishlist, cantidad, etc.)

### useEffect
- Carga inicial de datos con array vacío `[]`
- Validación en tiempo real con dependencias
- Rotación automática de noticias con `setInterval`
- Limpieza de efectos con cleanup function

### Navegación
- Stack Navigation para flujo de catálogo → detalle
- Tab Navigation para las 3 secciones principales
- Paso de parámetros con `navigation.navigate` y `route.params`

## Notas Adicionales

- **Sin Persistencia:** Los datos son simulados. Al presionar "Agregar Juego" se muestra un Alert.
- **Datos Hardcodeados:** El catálogo inicial contiene 8 juegos de ejemplo.
- **Memory Leak Prevention:** La pantalla de noticias implementa correctamente el cleanup de `setInterval`.

## Historial de Commits

Todos los commits siguen el estándar:
- `feat:` para nuevas características
- `fix:` para correcciones
- `style:` para cambios de estilos
- `refactor:` para refactorización de código

Ejemplo: `feat: add GameDetailScreen with wishlist toggle`

---

**Última actualización:** Marzo 2026  
**Versión:** 1.0.0

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
