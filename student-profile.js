import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const StudentProfile = () => {

  const firstName = "Diar";
  const lastName = "Dragusha";
  const birthday = "2009-05-10";
  const age = 16;
  const school = "Shkolla Digjitale";

  let fullName = firstName + " " + lastName;

  const hobbies = [
    { id: '1', name: 'Football' },
    { id: '2', name: 'Coding' },
    { id: '3', name: 'Gaming' },
    { id: '4', name: 'Gym' }
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{fullName}</Text>

        <Text style={styles.label}>Birthday:</Text>
        <Text style={styles.value}>{birthday}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{age}</Text>

        <Text style={styles.label}>School:</Text>
        <Text style={styles.value}>{school}</Text>
      </View>

      <Text style={styles.subtitle}>Hobbies</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.hobbyItem}>• {item.name}</Text>
        )}
      />

    </View>
  );
};

export default StudentProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#777',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hobbyItem: {
    fontSize: 16,
    padding: 5,
    backgroundColor: '#ddd',
    marginBottom: 5,
    borderRadius: 6,
  },
});