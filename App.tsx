import React, {useEffect} from 'react';
import {LanguageProvider} from './src/contexts/languageContext';
import {ThemeProvider} from './src/contexts/themeContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/configs/navigation.route';
import {StatusBar, StyleSheet, View} from 'react-native';
import AuthNavigator from './src/navigation/auth';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/app/store';
import StackPlayer from './src/components/layout/stack-player';
import TrackPlayer from 'react-native-track-player';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      // The player is ready to be used
      console.log('TrackPlayer setup complete');
    });
  }, []);
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <NavigationContainer>
            <View
              style={{
                flex: 1,
                marginTop: StatusBar.currentHeight,
                paddingTop: 0,
              }}>
              {/* TODO: Sửa style của status bar theo theme */}
              <StatusBar barStyle="dark-content" />
              <StackPlayer style={styles.stackPlayer} />
              <AuthNavigator Stack={Stack} />
            </View>
          </NavigationContainer>
        </LanguageProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  stackPlayer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});
