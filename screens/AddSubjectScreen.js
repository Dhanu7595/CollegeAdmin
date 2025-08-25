// screens/AddSubjectScreen.js
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddSubjectScreen({ navigation }) {
  const [subject, setSubject] = useState("");

  const addSubject = async () => {
    const data = await AsyncStorage.getItem("subjects");
    let subjects = data ? JSON.parse(data) : [];
    subjects.push(subject);
    await AsyncStorage.setItem("subjects", JSON.stringify(subjects));
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="New Subject" value={subject} onChangeText={setSubject} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Button title="Add" onPress={addSubject} />
    </View>
  );
}
