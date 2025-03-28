import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from '../../components/common/button';
import TextButtonComp from '../../components/common/text-button';
import routes from '../../configs/routes';
import useLanguage from '../../hook/useLanguage';
import useTheme from '../../hook/useTheme';

export default function SignUpScreen() {
  const {t} = useLanguage();
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);
  const navigation: any = useNavigation();

  const handleSignIn = () => {
    navigation.push(routes.auth.signin);
  };

  const handleSignUp = (type: string) => {
    if (type === 'facebook') {
    } else if (type === 'google') {
    } else if (type === 'apple') {
    } else {
      // Sign in with email and password
      navigation.push(routes.home);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>{/* TODO: Logo Here */}</View>
      <View style={styles.slogan}>
        {/* Welcome */}
        <Text style={styles.welcome}>{t.welcome}</Text>
        <Text style={styles.welcomeSlogan}>{t.welcomeSlogan}</Text>
      </View>
      <View style={styles.form}>
        {/* Sign In Form */}
        <TextInput
          style={styles.input}
          placeholder={t.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={t.password}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={t.rePassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <View style={styles.signin}>
          {/* Sign In Button */}
          <ButtonComp
            text={t.signup}
            fullWidth
            onPress={() => handleSignUp('password')}
          />
        </View>

        <Text style={styles.forgotPassword}>
          {t.or} {t.signUpWith}
        </Text>
        <View style={styles.loginMethodWrapper}>
          {/* TODO: Add button login by facebook, google */}
          <TouchableOpacity onPress={() => handleSignUp('facebook')}>
            <Icon name="logo-facebook" color={currentTheme.primary} size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSignUp('google')}>
            <Icon name="logo-google" color={currentTheme.primary} size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSignUp('apple')}>
            <Icon name="logo-apple" color={currentTheme.primary} size={48} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signUp}>
        {/* Sign Up */}
        <Text>{t.isMember}</Text>
        <TextButtonComp text={t.signin} onPress={handleSignIn} primary />
      </View>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    logo: {
      height: 100,
      width: 100,
      backgroundColor: 'red',
    },
    slogan: {
      alignItems: 'center',
      gap: 8,
    },
    welcome: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    welcomeSlogan: {
      fontSize: 14,
      color: 'gray',
    },
    form: {
      width: '80%',
    },
    input: {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      marginBottom: 16,
      paddingHorizontal: 18,
      height: 48,
      borderRadius: 32,
      fontSize: 16,
    },
    signin: {
      marginTop: 16,
    },
    forgotPassword: {
      alignSelf: 'center',
      marginTop: 16,
    },
    forgotPasswordText: {
      color: theme.primary,
    },
    loginMethodWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 32,
      marginTop: 16,
    },
    signUp: {
      flexDirection: 'row',
      gap: 4,
      color: 'gray',
    },
    signUpButton: {
      color: theme.primary,
    },
  });
