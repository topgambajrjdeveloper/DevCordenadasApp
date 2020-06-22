import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, SafeAreaView, Text
} from 'react-native'
import { Container, Content, Thumbnail, Image } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.ImageProfile}>
          <Thumbnail source={require('../assets/img/julifoto.png')} />
        </View>
        <Text style={styles.title}>Julian Rodríguez</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subTitle}>Full Stack Developer JavaScript</Text>
        </ScrollView>
      </SafeAreaView>

    );
  }
};

const styles = StyleSheet.create({
  ImageProfile: {
    flex: 1,
    width: 500,
    height: 500,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 19,
  },
  subTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 15,
  },
  scrollView: {
    height: '100%'
  },
});


{/* <header className="hero">
  <div className="section-center hero-center">
    <article className="hero-info">
      <div>
        <div className="underline"></div>
        <h1>Soy Julián</h1>
        <h4>Full Stack Developer JavaScript</h4>
        <Link to="/contact" className="btn">
          contactar
            </Link>
        <SocialLinks />
      </div>
    </article>
    <Image fluid={fluid} className="hero-img" />
  </div>
</header> */}







