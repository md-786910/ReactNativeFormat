import 'react-native-gesture-handler';
import * as React from 'react';
import { Button } from 'react-native';

// tab
import Home from "./screen/Home"
import Settings from "./screen/Settings"
import More from "./screen/More"
import News from "./screen/News"
import Google from "./screen/Google"
import Youtube from "./screen/Youtube"

// drawer
import Corona from "./screen/Corona"
import Search from "./screen/Search"
import Latest from "./screen/Latest"
import Cricket from "./screen/Cricket"
import About from "./screen/About"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Import Custom Sidebar
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// materail Drawer
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// make Drawer

//

const DrawerNav = ({ navigation }) => {

  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: "#694fad" },
      headerTintColor: "white",
      headerRight: () => <Button title="search" color="#694fad" onPress={() => navigation.navigate('Search')} />


    }}>
      <Drawer.Screen name="OverView" component={TavNav}

        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      >

      </Drawer.Screen>

      <Drawer.Screen name="News" component={News}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="strategy" color={color} size={26} />
          )
        }}

      >
      </Drawer.Screen>

      <Drawer.Screen name="Corona" component={Corona}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="alert" color={color} size={26} />
          )
        }}

      >

      </Drawer.Screen>
      <Drawer.Screen name="Latest" component={Latest}

        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="new-box" color={color} size={26} />
          )
        }}
      >

      </Drawer.Screen>
      <Drawer.Screen name="Cricket" component={Cricket}

        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="tennis-ball" color={color} size={26} />
          )
        }}

      >

      </Drawer.Screen>

      <Drawer.Screen name="About" component={About}

        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          )
        }}

      >

      </Drawer.Screen>
      <Drawer.Screen name="More" component={More}

        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />
          )
        }}

      >

      </Drawer.Screen>
    </Drawer.Navigator>
  )

}


const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{

      headerStyle: {
        backgroundColor: "#694fad"
      },
      headerTintColor: "white"

    }}>
      <Stack.Screen name="news" component={DrawerNav} options={{ headerShown: false }} >
      </Stack.Screen>

      <Stack.Screen name="Settings" component={Settings}>
      </Stack.Screen>

      <Stack.Screen name="Search" component={Search} >
      </Stack.Screen>
    </Stack.Navigator>
  )
}


const TavNav = () => {
  return (
    <Tab.Navigator activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad', }}>

      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarColor: "#3e2465",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />

      {/* <Tab.Screen name="Settings" component={Settings} options={{
        // tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ), */}
      < Tab.Screen name="Google" component={Google} options={{
        // tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="web" color={color} size={26} />
        ),

      }} />

      <Tab.Screen name="Youtube" component={Youtube} options={{
        tabBarLabel: 'More',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="youtube" color={color} size={26} />
        ),

      }} />


    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default App;

// const colorScheme = Appearance.getColorScheme();
// if (colorScheme === 'dark') {
//   // Use dark color scheme
// }