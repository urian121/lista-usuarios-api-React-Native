import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Provider as PaperProvider, Card, Text, ActivityIndicator } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { styles } from './assets/css/home';

export default function App() {
  const [usuarios, setUsuarios] = useState([]); // Array de usuarios
  const [loading, setLoading] = useState(true); // Estado de carga

  /**
   * Función para obtener usuarios de la API
   */
  const getUsers = async () => {
    try {
      const res = await fetch('https://devsapihub.com/api-users');
      // Verifica si la respuesta es exitosa
      if (!res.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await res.json(); // Convierte la respuesta a JSON
      setUsuarios(data); // Actualiza el estado con los usuarios obtenidos
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    } finally {
      setLoading(false); // Cambia el estado de carga a false
    }
  };

  // Efecto para obtener usuarios al cargar el componente
  useEffect(() => {
    getUsers();
  }, []);

  /**
   * Función para renderizar un usuario
   */
  const renderUser = (item) => (
    <Card key={item.id.toString()} style={styles.card} mode="contained">
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text variant="titleMedium" style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.location}>
            {item.location.city}, {item.location.country}
          </Text>
          <Text style={item.online ? styles.online : styles.offline}>
            {item.online ? 'En línea' : 'Desconectado'}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>Usuarios desde API</Text>

        {loading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {usuarios.map(renderUser)}
          </ScrollView>
        )}
      </View>
    </PaperProvider>
  );
}
