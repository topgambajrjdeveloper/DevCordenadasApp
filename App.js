import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabNavigation from './src/components/tabs/MainTabNavigation';
import { DrawersContent } from './src/components/drawers/DrawersContent';
import About from './src/pages/about';
import Projects from './src/pages/projects';
import Blog from './src/pages/blog';
import Contactar from './src/pages/contactar';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawersContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabNavigation} />
        <Drawer.Screen name="AboutDrawer" component={About} />
        <Drawer.Screen name="ProjectsDrawer" component={Projects} />
        <Drawer.Screen name="BlogDrawer" component={Blog} />
        <Drawer.Screen name="ContactDrawer" component={Contactar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
