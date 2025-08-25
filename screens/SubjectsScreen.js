// screens/SubjectsScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SubjectsScreen({ navigation }) {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    const data = await AsyncStorage.getItem("subjects");
    if (data) setSubjects(JSON.parse(data));
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput placeholder="Search" value={search} onChangeText={setSearch} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <FlatList
        data={subjects.filter((s) => s.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item}</Text>}
      />
      <TouchableOpacity onPress={() => navigation.navigate("AddSubject")}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}
