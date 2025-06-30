import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function ReservationScreen() {
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

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Reservation</Text>
        <Text style={styles.subtitle}>Book a table</Text>

        <View style={styles.row}>
          <TextInput placeholder="Name" placeholderTextColor="#ccc" style={styles.input} />
          <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />
        </View>

        <TextInput placeholder="Phone" placeholderTextColor="#ccc" style={styles.inputFull} />

        <View style={styles.row}>
          <TextInput placeholder="DD/MM/YYYY" placeholderTextColor="#ccc" style={styles.input} />
          <TextInput placeholder="7:00 PM" placeholderTextColor="#ccc" style={styles.input} />
        </View>

        <TextInput
          placeholder="Special requests..."
          placeholderTextColor="#ccc"
          style={[styles.inputFull, { height: 80, textAlignVertical: 'top' }]}
          multiline
        />

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    flex: 1,
    marginBottom: 12,
  },
  inputFull: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  bookButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  bookButtonText: {
    fontWeight: 'bold',
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
