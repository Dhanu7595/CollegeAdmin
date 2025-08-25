// screens/StudentDetailsScreen.js
import React from "react";
import { View, Text, FlatList } from "react-native";

export default function StudentDetailsScreen({ route }) {
  const { student } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{student.firstName} {student.lastName}</Text>
      <FlatList
        data={student.scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, marginVertical: 5, padding: 10 }}>
            <Text>{item.subject}</Text>
            <Text>Score: {item.score} / {item.maxScore}</Text>
            <Text>Result: {item.result}</Text>
          </View>
        )}
      />
    </View>
  );
}
