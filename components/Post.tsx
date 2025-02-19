import { Image, StyleSheet, Platform } from 'react-native';

import { ThemedView } from './ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';

interface PostProps {
    data: {
        id: string;
        user_id: string;
        title: string;
        body: string;
    }
}

export const Post: React.FC<PostProps> = ({ data }) => {
    // const [username, setUsername] = useState("");
    // // const [avatar, setAvatar] = useState('');

    // // fetch the user 
    // useEffect(() => {
    //     fetch(`https://gorest.co.in/public/v2/users/${data.user_id}`)
    //         .then((response) => response.json())
    //         .then((json) => setUsername(json.data.name))
    //         .catch((error) => setUsername('Unknown User'))
    // }
    // , []);

    // random avatar and username
    const users_dummy = ['John Doe', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Ryan', 'Sara', 'Tom', 'Uma', 'Vince', 'Wendy', 'Xander', 'Yara', 'Zack'];
    let ran = Math.floor(Math.random() * users_dummy.length);
    const username = users_dummy[ran];
    let avatar = `https://xsgames.co/randomusers/assets/avatars/pixel/${ran}.jpg`;

    const postDataString = encodeURIComponent(JSON.stringify(data));


    return (
        <ThemedView key={data.id} style={styles.postContainer}>
            <Link href={{
                pathname: '/commentsPage/[post]',
                params: { post: postDataString },
            }}>
                <ThemedText type="title">{data.title}{"\n"}</ThemedText>
                <ThemedText type="subtitle"><Image source={{ uri: avatar }} style={styles.avatar} />
                    <ThemedText type="subtitle">{username}</ThemedText>{"\n"}</ThemedText>
                <ThemedText>
                    {data.body}
                </ThemedText>
            </Link>
        </ThemedView>
    );
}


const styles = StyleSheet.create({
    postContainer: {
        gap: 8,
        marginBottom: 8,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    avatar: {
        width: 18,
        height: 18,
        borderRadius: 20,
        marginRight: 12,
        marginLeft: 3,
        marginTop: 3,
    },
});
