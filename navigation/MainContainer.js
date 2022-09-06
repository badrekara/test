import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ProfileScreen from "./screens/ProfileScreen";
import JobsScreen from "./screens/JobsScreen";
import proposalsScreen from "./screens/ProposalsScreen";
import MessageScreen from "./screens/MessageScreen";
import ContractsScreen from "./screens/ContractsScreen";

// Screens names
const profileName = "Profile";
const jobsName = "Jobs";
const proposalsName = "Proposals";
const contractsName = "Contracts";
const MessageName = "Message";

// tab
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={jobsName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === profileName) {
              iconName = focused ? "person" : "person";
            } else if (rn === proposalsName) {
              iconName = focused ? "ios-documents" : "ios-documents";
            } else if (rn === MessageName) {
              iconName = focused ? "mail-unread" : "mail-unread";
            } else if (rn === jobsName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === contractsName) {
              iconName = focused ? "ios-create-sharp" : "ios-create-sharp";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1a8cff",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={profileName} component={ProfileScreen} />
        <Tab.Screen name={jobsName} component={JobsScreen} />
        <Tab.Screen name={proposalsName} component={proposalsScreen} />
        <Tab.Screen name={contractsName} component={ContractsScreen} />
        <Tab.Screen name={MessageName} component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
