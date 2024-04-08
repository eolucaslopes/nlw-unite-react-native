import { Header } from '@/components/header';
import { View, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Credential } from '@/components/credential';

export default function Ticket() {
  return (
    <View className="flex-1 bg-green-500">
      {Platform.OS === 'ios' && <StatusBar style="light" />}
      
      <Header title="Minha Credencial" />
      <Credential />
    </View>
  )  
}