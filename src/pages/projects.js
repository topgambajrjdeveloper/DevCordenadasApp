import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import {map} from 'lodash'
import { getStrapiApiProjects } from '../api/ApiStrapi';


const Projects = () => {
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    getStrapiApiProjects().then((response) => {
      setProject(response);
     });

  }, [])
  
  return (
    <View>
      {map(project, (data) => (
        <Text>
        Sobre mi
      </Text>
  ))}
    </View>
  );
};

export default Projects;
