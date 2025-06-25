import { LinearGradient } from 'expo-linear-gradient'; // Import the gradient component
import { useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomStatusBar from '../src/CustomStatusBar'; // Custom status bar component

export default function CreateNew() {
  const router = useRouter();

  return (
    <>
  <CustomStatusBar backgroundColor="#121212" barStyle="light-content" />
    </>,
    
    <View style={styles.container}>
      {/* Illustration or Placeholder Graphic */}
      <Image 
        source={require('../assets/Images/CreateImg.png')} 
        style={styles.image}
        resizeMode="contain"/>
     
      <Text style={styles.title}>Let’s Get Started</Text>
      <Text style={styles.subtitle}>Create your first notebook</Text>

      {/* Create Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
                      console.log('Pressed Create New');
                     router.push('/AddSource');}} // Route to next step
      >
         <LinearGradient
          colors={['#5E35B1', '#7E57C2']} // NotebookLM purple gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
         >
               <Text style={styles.buttonText}>+ Create New</Text>
         </LinearGradient>

      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: width * 0.5,
    height: width * 0.3,
    marginBottom: 40,
    opacity: 0.9,
  },
  title: {
  fontSize: 28,
  fontWeight: '700',
  color: '#BB86FC', // VIBRANT PURPLE
  textAlign: 'center',
  marginBottom: 16,
  lineHeight: 34,
  textShadowColor: 'rgba(187, 134, 252, 0.3)', // Glow effect
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 10,
},
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A5A5A5', // Light gray
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
    paddingHorizontal: 40,
  },
  button: {
  backgroundColor: '#BB86FC',
  width: '60%',
  borderRadius: 24,
  marginBottom: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 0,
  maxWidth: 300,
  shadowColor: '#BB86FC', // Light purple shadow
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 6,
  
  },
  gradientButton: {
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 8,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
},
  buttonText: {
    color: '#121212', // Dark text for contrast
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});