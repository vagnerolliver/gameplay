import React from 'react';
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import Illustration from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      console.log('SignIn Error', error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={Illustration}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seu amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
