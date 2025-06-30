import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const navigate = (path: '/' | '/reservation') => {
    setMenuVisible(false);
    router.push(path);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../items/Auranyl.png')} style={styles.logo} />
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Hero Image */}
      <Image
        source={require('../items/mainFood.png')}
        style={styles.heroImage}
        resizeMode="contain"
      />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.subheading}>Elevate Your Senses</Text>
        <Text style={styles.heading}>One Note,{'\n'}One Bite.</Text>

        {/* Navigate to reservation screen */}
        <TouchableOpacity onPress={() => router.push('/reservation')} style={styles.button}>
          <Text style={styles.buttonText}>Book a table</Text>
        </TouchableOpacity>
      </View>

      {/* Slide-out Menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigate('/')} style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('/reservation')} style={styles.menuItem}>
              <Text style={styles.menuText}>Reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuItem}>
              <Text style={[styles.menuText, { color: '#888' }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  heroImage: {
    width: '130%',
    height: 400,
    marginTop: 30,
  },
  textContainer: {
    marginTop: 40,
    marginLeft: 10,
  },
  subheading: {
    color: '#aaa',
    fontSize: 24,
    marginBottom: 10,
    letterSpacing: 1,
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#e63946',
    lineHeight: 45,
    marginBottom: 30,
    marginTop: 10,
  },
  button: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'flex-start',
  },
  menu: {
    backgroundColor: '#222',
    padding: 30,
    paddingTop: 80,
  },
  menuItem: {
    marginBottom: 20,
  },
  menuText: {
    color: '#fff',
    fontSize: 20,
  },
});
