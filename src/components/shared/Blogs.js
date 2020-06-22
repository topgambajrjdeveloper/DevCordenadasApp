import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';


export default function Blogs(props) {
    const { data: { title, desc, createdAt, category, imagen, url} } = props;
    const imagenUrl = 'https://res.cloudinary.com/dcb0tueyg/image/upload/v1592246170'
    return (
        <Container>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `https://res.cloudinary.com/dcb0tueyg/image/upload/v1592246170/lorem_ipsun_e066f31775.jpg` }} />
                        <Body>
                            <Text>{title}</Text>
                            <Text note>{createdAt}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: `https://res.cloudinary.com/dcb0tueyg/image/upload/v1592246170/lorem_ipsun_e066f31775.jpg` }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {desc}
                        </Text>
                        <Text>
                            {category}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </Container>


    )
}