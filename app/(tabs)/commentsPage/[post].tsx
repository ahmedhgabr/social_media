import { StyleSheet, Image, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { useState } from 'react';
import { CommentList } from '@/components/Comment';
import { Post } from '@/components/Post';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';


interface Comment {
  id: string;
  post_id: string;
  name: string;
  email: string;
  body: string;
}

export default function CommentsScreen() {
  const { post } = useLocalSearchParams();
  const navigation = useNavigation();
  const decodedPostData = JSON.parse(decodeURIComponent(post as string));

  const [comments, setComments] = useState<Comment[]>([]);

  // fetch the user 
  fetch(`https://gorest.co.in/public/v2/comments`)
    .then((response) => response.json())
    .then((json) => setComments(json.data))
    .catch((error) => console.log())

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Post data={decodedPostData} />
      <ThemedText type="defaultSemiBold">Comments</ThemedText>
      <CommentList comments={comments} />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10, // Adjust based on your design
    left: 5,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 8,
    borderRadius: 20,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
