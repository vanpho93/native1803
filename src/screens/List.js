import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Button } from '../shared/Button';

import bugIcon from '../images/bug.png';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singers: [
                { _id: 'a1', name: 'Justin Bieber', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/0/00ee53543d5d58856e50f5fde919a19b_1447671074.jpg' },
                { _id: 'a2', name: 'Alan Walker', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/0/c0158a5d0afdbb8b3d177162b9328a7c_1452770729.jpg' },
                { _id: 'a3', name: 'Camila Cabello', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/3/033e843ca1e354b5298fc21816a633d4_1516949382.jpg' },
                { _id: 'a4', name: 'Charlie Puth', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/6/e6315a53da3054a2a4587b532d06933c_1425035895.jpg' },
                { _id: 'a5', name: 'Bruno Mars', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/b/eb6d98feebca39aebf2c6d6c0c058d30_1475836289.jpg' },
                { _id: 'a6', name: 'Ellie Goulding', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/1/d121e70471630c754a95888a38e8d2b9_1442572824.jpg' },
            ]
        };
    }
    render() {
        const { singers } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>US-UK Singers</Text>
                <FlatList
                    data={singers}
                    renderItem={({ item }) => (
                        <View style={styles.singerContainer}>
                            <Image source={{ uri: item.image }} style={styles.avatar} />
                            <View style={styles.singerRight}>
                                <Text style={styles.title}>{item.name}</Text>
                                <View style={styles.singerControllers}>
                                    <Button title="Show" type="success" />
                                    <Button title="Delete" type="warning" />
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item._id}
                />
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 25
    },
    singerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width - 20,
        marginVertical: 10,
        backgroundColor: '#CED1D9',
        paddingVertical: 10,
        borderRadius: 20
    },
    singerRight: {

    },
    singerControllers: {
        flexDirection: 'row'
    }
});
