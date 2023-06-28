import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 items-center justify-center bg-blue-500 ">
        <Text className="text-blue">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  )
}
