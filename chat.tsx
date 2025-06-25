import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function Chat() {
  const { fileName } = useLocalSearchParams(); // Get the passed file name
  const [input, setInput] = useState('');  // State to store user input from TextInput
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'This is a summary of your uploaded document. You can now ask questions based on it.',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {             //function to handle when user taps the send icon
    if (!input.trim()) return;          //Ignore empty input
   
    // Construct user messages
    const userMsg =  { sender: 'user', text: input};
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    //Simulate AI response after 1 second
    setTimeout(() => {
      const aiMsg = { sender: 'ai',
        text: 'Here is a helpful response based on the source'};
     setMessages(prev => [...prev, aiMsg]);
     setIsTyping(false);
      }, 2000);
    };

  return (
    <View style={styles.container}>
      {/* Document Title */}
      <Text style={styles.docTitle}>{fileName ?? 'Document Title'}</Text>

      {/* Summary Text */}
      <Text style={styles.summary}>{messages[0].text}</Text>

      {/* Display list of messages below the summary */}
      <ScrollView style={styles.scrollContainer}
      contentContainerStyle={{paddingBottom: 16}}
      >
        {messages.slice(1).map((msg,index) => (
          <View
            key={index}
            style={[ styles.messageBubble,
               msg.sender === 'user' ? styles.userBubble : styles.aiBubble]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}

       {/*Typing Indicator*/}
       {isTyping && (
        <View style={[styles.messageBubble , styles.aiBubble]}>
           <Text style={styles.messageText}>...</Text>
        </View>
       )}

      </ScrollView>
      
      {/* Chat Input Box to type questions*/}
      <View style={styles.chatBox}>
        <TextInput
          placeholder="Ask 1 source..."
           placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
          style={styles.input}
          returnKeyType='done' //shows "done" instead of return
          onSubmitEditing={() => {}}
         
        />
        <TouchableOpacity 
         onPress={handleSend}
         disabled={!input.trim()}    //disable when empty
         style={{opacity: input.trim() ? 1 : 0.5}}
        >
          <FontAwesome name="send" size={20} color="#5E5CE6" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Tabs
      <View style={styles.tabBar}>
        <Text style={styles.tab}>📁 Sources</Text>
        <Text style={[styles.tab, styles.activeTab]}>💬 Chat</Text>
        <Text style={styles.tab}>🎙️ Studio</Text>
      </View>
       */}
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    paddingHorizontal: 20,
  },
  docTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#BB86FC', // Accent purple
    marginTop: 50,
    marginBottom: 0,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  summary: {
    fontSize: 15,
    lineHeight: 22,
    color: '#E0E0E0',
    backgroundColor: '#1E1E1E', // Dark card
    borderRadius: 12,
    padding: 16,
    marginTop: 15,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#5E5CE6', // Accent border
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2D2D2D',
    
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    backgroundColor: '#121212',
    marginBottom: 10,
  },
  tab: {
    fontSize: 14,
    color: '#A5A5A5',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  activeTab: {
    color: '#5E5CE6',
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#5E5CE6',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#5E5CE6',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    maxWidth: width * 0.8,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    maxWidth: width * 0.8,
    borderBottomLeftRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: '#5E5CE6', // Accent border for AI messages
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
  },
  messageBubble: {
    maxWidth: width * 0.8,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
});