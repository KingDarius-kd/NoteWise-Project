import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
   <>
    <StatusBar
      barStyle='light-content'
      backgroundColor="#0C0C0C" // Dark background color
      translucent={false} // Not translucent for a solid color
    />

  <Stack>
    <Stack.Screen name="Welcome" options={{ headerShown: false , animation: 'fade',
}} />
    <Stack.Screen name="CreateNew" options={{ headerShown: false , animation: 'fade',
 }} />
    <Stack.Screen name="AddSource" options={{ headerShown: false , animation: 'fade',}} />
       
       <Stack.Screen name="AddPDF" options={{ headerShown: false , animation: 'fade',
}} />

<Stack.Screen name="Analyzing" options={{ headerShown: false , animation: 'fade',}} />

<Stack.Screen name="AddURL" options={{ headerShown: false , animation: 'fade',}} />

<Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
    <Stack.Screen name="chat" options={{ headerShown: false , animation: 'fade',}} />
    <Stack.Screen name="studio" options={{ headerShown: false , animation: 'fade',}} />
    <Stack.Screen name="sources" options={{ headerShown: false , animation: 'fade',}} />
  </Stack>;

</>

  );
}
