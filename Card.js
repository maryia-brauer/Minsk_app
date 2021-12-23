import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Box({ children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );
}

Box.propTypes = { children: PropTypes.node.isRequired };