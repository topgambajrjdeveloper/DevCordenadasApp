import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import {map} from 'lodash'
import { getStrapiApiAbout } from '../api/ApiStrapi';


export default function About() {
  const [about, setAbout] = useState(null);
  
  useEffect(() => {
    getStrapiApiAbout().then((response) => {
      setAbout(response);
     });

  }, [])
  return (
    
    <View>
      {map(about, (data) => (
        <Text>
        Sobre mi
      </Text>
  ))}
    </View>
  );
};

