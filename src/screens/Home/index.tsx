import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { StackRouteList } from "../../types/navigation";

import styles from "./styles";

const buttons = [
  { label: "🗒️ FloatingActionButton", route: "FloatingActionButton" as const },
];

const Home: React.FC = () => {
  const { navigate } = useNavigation<StackRouteList>();

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        keyExtractor={({ label }) => label}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate(item.route)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
