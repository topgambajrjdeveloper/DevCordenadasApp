import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../pages/home';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import Blog from '../../pages/blog';
import Contactar from '../../pages/contactar';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ProjectsStack = createStackNavigator();
const BlogStack = createStackNavigator();
const ContactarStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabNavigation = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Inicio',
        tabBarColor: '#2caeba',
        tabBarIcon: ({color}) => <Icons name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutStackScreen}
      options={{
        tabBarLabel: 'Sobre Mi',
        tabBarColor: '#2caeba',
        tabBarIcon: ({color}) => (
          <Icons name="code-braces" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Projects"
      component={ProjectsStackScreen}
      options={{
        tabBarLabel: 'Proyectos',
        tabBarColor: '#2caeba',
        tabBarIcon: ({color}) => (
          <Icons name="projector-screen" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Blog"
      component={BlogStackScreen}
      options={{
        tabBarLabel: 'Blog',
        tabBarColor: '#2caeba',
        tabBarIcon: ({color}) => <Icons name="rss" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Contactar"
      component={ContactarStackScreen}
      options={{
        tabBarLabel: 'Contactar',
        tabBarColor: '#2caeba',
        tabBarIcon: ({color}) => (
          <Icons name="mailbox-up" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabNavigation;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2caeba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Inicio || DevCordenadas',
        headerLeft: () => (
          <Icons.Button
            name="menu"
            size={25}
            backgroundColor="#2caeba"
            onPress={() => navigation.openDrawer()}></Icons.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2caeba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <AboutStack.Screen
      name="Sobre Mi"
      component={About}
      options={{
        title: 'Sobre Mi || DevCordenadas',
        headerLeft: () => (
          <Icons.Button
            name="menu"
            size={25}
            backgroundColor="#2caeba"
            onPress={() => navigation.openDrawer()}></Icons.Button>
        ),
      }}
    />
  </AboutStack.Navigator>
);

const ProjectsStackScreen = ({navigation}) => (
  <ProjectsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2caeba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProjectsStack.Screen
      name="Proyectos"
      component={Projects}
      options={{
        title: 'Proyectos || DevCordenadas',
        headerLeft: () => (
          <Icons.Button
            name="menu"
            size={25}
            backgroundColor="#2caeba"
            onPress={() => navigation.openDrawer()}></Icons.Button>
        ),
      }}
    />
  </ProjectsStack.Navigator>
);

const BlogStackScreen = ({navigation}) => (
  <BlogStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2caeba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <BlogStack.Screen
      name="Blog"
      component={Blog}
      options={{
        title: 'Blog || DevCordenadas',
        headerLeft: () => (
          <Icons.Button
            name="menu"
            size={25}
            backgroundColor="#2caeba"
            onPress={() => navigation.openDrawer()}></Icons.Button>
        ),
      }}
    />
  </BlogStack.Navigator>
);


const ContactarStackScreen = ({navigation}) => (
  <ContactarStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2caeba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ContactarStack.Screen
      name="Contactar"
      component={Contactar}
      options={{
        title: 'Contactar || DevCordenadas',
        headerLeft: () => (
          <Icons.Button
            name="menu"
            size={25}
            backgroundColor="#2caeba"
            onPress={() => navigation.openDrawer()}></Icons.Button>
        ),
      }}
    />
  </ContactarStack.Navigator>
);
