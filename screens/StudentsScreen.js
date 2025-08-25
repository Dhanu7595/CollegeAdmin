// screens/StudentsScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StudentsScreen({ navigation }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await AsyncStorage.getItem("students");
    if (data) setStudents(JSON.parse(data));
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput placeholder="Search" value={search} onChangeText={setSearch} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <FlatList
        data={students.filter((s) => s.firstName.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("StudentDetails", { student: item })}>
            <Text style={{ padding: 10 }}>{item.firstName} {item.lastName}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("AddStudent")}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}
