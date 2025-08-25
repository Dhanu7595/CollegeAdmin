
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SubjectsScreen from "./screens/SubjectsScreen";
import StudentsScreen from "./screens/StudentsScreen";
import AddSubjectScreen from "./screens/AddSubjectScreen";
import AddStudentScreen from "./screens/AddStudentScreen";
import StudentDetailsScreen from "./screens/StudentDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SubjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Subjects" component={SubjectsScreen} />
      <Stack.Screen name="AddSubject" component={AddSubjectScreen} />
    </Stack.Navigator>
  );
}

function StudentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Students" component={StudentsScreen} />
      <Stack.Screen name="AddStudent" component={AddStudentScreen} />
      <Stack.Screen name="StudentDetails" component={StudentDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SubjectsTab" component={SubjectsStack} options={{ title: "Subjects" }} />
        <Tab.Screen name="StudentsTab" component={StudentsStack} options={{ title: "Students" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
