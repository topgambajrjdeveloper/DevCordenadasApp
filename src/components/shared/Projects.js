import React, { PureComponent } from 'react';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default class Projects extends PureComponent {
    state = {
        projectsAndBlog: [],
        loading: true
    }
    async componentDidMount() {
        try {
            const apiStrapi = await fetch('https://intense-refuge-03241.herokuapp.com/projects');
            const resp = await apiStrapi.json();
            setState({ projectsAndBlog: resp.result, loading: false });
        } catch (err) {
            console.log("Error fetching data", err);
        }
    }


    render() {
        return (
            <View>
                <Card>
                    <Card.Cover source={{ uri: `https://res.cloudinary.com/dcb0tueyg/image/upload/v1592246170/lorem_ipsun_e066f31775.jpg` }} />
                    <Card.Content>
                        <Title>titulo</Title>
                        <Paragraph>descp</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>name</Button>
                    </Card.Actions>
                </Card>
                <Divider />

            </View>
        )

    }
};