import { StyleSheet, Text, View } from 'react-native';

export default function SourcesScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Your uploaded sources will show here</Text>.
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    text: {
        color: '#A5A5A5', // Medium gray text
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    }
});













    