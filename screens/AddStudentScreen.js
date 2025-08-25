// screens/AddStudentScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "react-native-image-picker";

export default function AddStudentScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [photo, setPhoto] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.assets) setPhoto(response.assets[0].uri);
    });
  };

  const addStudent = async () => {
    const data = await AsyncStorage.getItem("students");
    let students = data ? JSON.parse(data) : [];
    students.push({ id: Date.now(), firstName, lastName, dob, photo, scores: [] });
    await AsyncStorage.setItem("students", JSON.stringify(students));
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={pickImage}>
        {photo ? <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} /> : <View style={{ width: 100, height: 100, backgroundColor: "#ddd" }} />}
      </TouchableOpacity>
      <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <TextInput placeholder="DOB (dd/mm/yyyy)" value={dob} onChangeText={setDob} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Button title="Save" onPress={addStudent} />
    </View>
  );
}
