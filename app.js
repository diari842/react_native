import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import StudentProfile from './screens/StudentProfile';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <StudentProfile />
    </SafeAreaView>
  );
}