import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';

import { map } from 'lodash';
import { getStrapiApiBlog, getStrapiApiAdmin } from '../api/ApiStrapi';
import Blogs from '../components/shared/Blogs';

const imgeUrl = `https://res.cloudinary.com/dcb0tueyg/image/upload/v1592246170/lorem_ipsun_e066f31775.jpg`

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStrapiApiBlog().then((response) => {
      setBlog(response);
    });
    getStrapiApiAdmin().then((response) => {
      setUser(response);
    })

  }, [])

  if (!user) return null;
  if (!blog) return null;

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Blog DevCordenadas</Text>
      <ScrollView style={styles.scroll}>
        {map(blog, (data) => (
          <Blogs key={data.id} data={data}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 16
  },
  scroll: {},
});

export default Blog;
