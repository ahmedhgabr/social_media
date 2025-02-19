import { Image, StyleSheet, Platform } from 'react-native';

import { ThemedView } from './ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface CommentProps {
    comments: Comment[];
}
interface Comment {
    id: string;
    post_id: string;
    name: string;
    email: string;
    body: string;
}

export const CommentList: React.FC<CommentProps> = ({ comments }) => {

    const commments_dummy = [{ "id": 139711, "post_id": 193399, "name": "Anamika Mishra", "email": "anamika_mishra@daugherty.test", "body": "Porro et mollitia. Voluptatum molestiae quibusdam. Ea aut enim. Sapiente et enim." }, { "id": 139710, "post_id": 193398, "name": "Lavanya Shukla", "email": "shukla_lavanya@marquardt.test", "body": "Et libero dolor. Quasi ipsa vel. Non qui velit." }, { "id": 139709, "post_id": 193398, "name": "Rev. Shakuntala Rana", "email": "rana_rev_shakuntala@hansen.example", "body": "Voluptatem ea temporibus. Quas eum sed." }, { "id": 139708, "post_id": 193397, "name": "Tejas Gill", "email": "tejas_gill@streich.example", "body": "Id dolores quidem." }, { "id": 139707, "post_id": 193397, "name": "Dinakar Mishra PhD", "email": "phd_dinakar_mishra@gerhold.test", "body": "Rem exercitationem qui. Est reprehenderit rerum. Qui ut laboriosam." }, { "id": 139706, "post_id": 193396, "name": "Kanchan Bhat", "email": "bhat_kanchan@schroeder.test", "body": "Nesciunt autem non." }, { "id": 139705, "post_id": 193396, "name": "Sharda Dubashi PhD", "email": "phd_sharda_dubashi@wintheiser.test", "body": "Dolore ut sed. Voluptatem quia ut. Nostrum consectetur voluptatem." }, { "id": 139660, "post_id": 193288, "name": "Chandran Reddy MD", "email": "md_reddy_chandran@gottlieb.example", "body": "Est atque omnis. Sint ut autem. Ipsa sint qui. Voluptatibus quo quae." }, { "id": 139659, "post_id": 193288, "name": "Anshula Mukhopadhyay", "email": "anshula_mukhopadhyay@tromp.test", "body": "Deleniti illo deserunt. Totam in fuga. Similique saepe voluptatem." }, { "id": 139658, "post_id": 193286, "name": "Pres. Brahmdev Pillai", "email": "brahmdev_pillai_pres@douglas.example", "body": "Enim atque numquam. Assumenda repellendus perferendis." }];




    return (
        <ThemedView style={styles.CommentContainer}>
            {
                commments_dummy.map((comment) => (
                    <ThemedView key={comment.id} style={styles.CommentContainer}>
                        <ThemedText type="subtitle"><Image source={{ uri: `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.floor(Math.random() * 20)}.jpg` }} style={styles.avatar} />
                            <ThemedText type="subtitle">{comment.name}</ThemedText></ThemedText>
                        <ThemedText>
                            {comment.body}
                        </ThemedText>
                    </ThemedView>
                ))
            }


        </ThemedView>
    );
}


const styles = StyleSheet.create({
    CommentContainer: {
        gap: 8,
        borderRadius: 8,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    avatar: {
        width: 16,
        height: 16,
        borderRadius: 20,
        marginRight: 5,
        marginLeft: 3,
        marginTop: 3,
    },
});
