import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
} from "react-native";

const CategoryGridTile = (props) => {
  let ToutchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ToutchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <ToutchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </ToutchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

export default CategoryGridTile;
