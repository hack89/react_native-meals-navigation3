import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
            <Text>{props.duration} m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#eee",

    borderRadius: 12,
    overflow: "hidden",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
