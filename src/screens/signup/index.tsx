import React, {useState} from 'react';
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
import {useFormik} from 'formik';
import {UserSignUpPayload} from '../../models/user';
import auth from '@react-native-firebase/auth';

export default function SignUpScreen() {
  const {t} = useLanguage();
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);
  const navigation: any = useNavigation();
  const [errorText, setErrorText] = useState('');
  const formik = useFormik<UserSignUpPayload>({
    initialValues: {
      email: '',
      password: '',
      rePassword: '',
    },
    onSubmit: values => {
      handleSignUpWithEmail(values);
    },
    validate: values => {
      const errors: any = {};

      if (!values.email) {
        errors.email = t.required;
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = t.invalidEmail;
      }

      if (!values.password) {
        errors.password = t.required;
      } else if (values.password.length < 8) {
        errors.password = t.passwordLength;
      }

      if (!values.rePassword) {
        errors.rePassword = t.required;
      } else if (values.rePassword !== values.password) {
        errors.rePassword = t.passwordNotMatch;
      }

      return errors;
    },
  });

  const handleSignIn = () => {
    navigation.push(routes.auth.signin);
  };

  const handleSignUp = (type: string) => {
    if (type === 'facebook') {
    } else if (type === 'google') {
    } else if (type === 'apple') {
    }
  };

  const handleSignUpWithEmail = (data: UserSignUpPayload) => {
    // Handle sign up with email and password
    if (data.password !== data.rePassword) {
      setErrorText(t.notMatchPassword);
      return;
    }
    console.log('Sign up with email and password', data);
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setErrorText('');
        navigation.push(routes.auth.signin);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorText(t.existAccount);
        }

        if (error.code === 'auth/invalid-email') {
          setErrorText(t.emailInvalid);
        }
      });
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
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
        <TextInput
          style={styles.input}
          placeholder={t.password}
          secureTextEntry={true}
          autoCapitalize="none"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <TextInput
          style={styles.input}
          placeholder={t.rePassword}
          secureTextEntry={true}
          autoCapitalize="none"
          value={formik.values.rePassword}
          onChangeText={formik.handleChange('rePassword')}
        />
        {errorText && <Text style={styles.errorText}>{errorText}</Text>}
        <View style={styles.signin}>
          {/* Sign In Button */}
          <ButtonComp text={t.signup} fullWidth onPress={formik.handleSubmit} />
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
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 4,
      textAlign: 'center',
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
