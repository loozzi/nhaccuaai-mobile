import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigate} from 'react-router-native';
import ButtonComp from '../../components/common/button';
import TextButtonComp from '../../components/common/text-button';
import routes from '../../configs/routes';
import useLanguage from '../../hook/useLanguage';
import useTheme from '../../hook/useTheme';

export default function SignInScreen() {
  const {t} = useLanguage();
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(routes.auth.signup);
  };

  const handleForgotPassword = () => {
    navigate(routes.auth.forgotPassword);
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
        <View style={styles.signin}>
          {/* Sign In Button */}
          <ButtonComp text={t.signin} fullWidth />
          {/* Forgot password */}
          <TextButtonComp
            text={t.forgotPassword}
            onPress={() => console.log('Forgot Password')}
            style={styles.forgotPassword}
            fontSize={14}
            primary
          />
        </View>
      </View>

      <View style={styles.signUp}>
        {/* Sign Up */}
        <Text>{t.notMember}</Text>
        <TextButtonComp text={t.signup} onPress={handleSignUp} primary />
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
    signUp: {
      flexDirection: 'row',
      gap: 4,
      color: 'gray',
    },
    signUpButton: {
      color: theme.primary,
    },
  });
