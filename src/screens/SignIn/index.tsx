import React from 'react';
import {View, Image, Text} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon';
import {styles} from './styles';
import Illustration from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatina {'\n'}
          facilmente {'\n'}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seu amigos
        </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
