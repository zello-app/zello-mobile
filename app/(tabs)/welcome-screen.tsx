import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen(): React.JSX.Element {
  return (
    <View style={styles.background}>

      <Image
        source={require('../../assets/images/icon-zello.png')}
        style={styles.logo}
      />

      {/* Texto na parte verde */}
      <View style={styles.headerText}>
        <Text style={styles.welcome}>Bem-vindo ao</Text>
        <Text style={styles.appName}>+Zello</Text>
      </View>

      {/* Card branco */}
      <View style={styles.container}>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-add" size={22} color="white" />
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="log-in" size={22} color="white" />
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#10B981',
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 70,
    resizeMode: 'contain',
  },

  headerText: {
    alignItems: 'center',
    marginTop: 10,
  },

  welcome: {
    color: 'white',
    fontSize: 20,
  },

  appName: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },

  container: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#2563EB',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});