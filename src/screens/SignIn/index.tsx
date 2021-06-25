import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import Illustration from '../../assets/illustration.png';
import { styles } from './styles';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const navigation = useNavigation();

  const { user } = useAuth();
  console.log('user', user);

  function handleSignIn() {
    navigation.navigate('Home');
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

          <ButtonIcon title="Entrar com o Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
