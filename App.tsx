import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from './src/app/store';
import StackPlayer from './src/components/layout/stack-player';
import {RootStackParamList} from './src/configs/navigation.route';
import {LanguageProvider} from './src/contexts/languageContext';
import {ThemeProvider} from './src/contexts/themeContext';
import AuthNavigator from './src/navigation/auth';
import {setupTrackPlayer} from './src/services/trackPlayer.service';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      await setupTrackPlayer();
    });
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
                <AuthNavigator Stack={Stack} />
                <StackPlayer style={styles.stackPlayer} />
              </View>
            </NavigationContainer>
          </LanguageProvider>
        </ThemeProvider>
      </PersistGate>
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
