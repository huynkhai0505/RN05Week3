import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.purpleContainer}>
          <Text style={styles.textInside}> Purple: #C9C9FF</Text>
        </View>
        <View style={styles.blueContainer}>
          <Text style={styles.textInside}> Blue: #3D85C6</Text>
        </View>
        <View style={styles.greenContainer}>
          <Text style={styles.textInside}> Green: #96CC96 </Text>
        </View>
        <View style={styles.yellowContainer}>
          <Text style={styles.textInside}> Yellow: #F4B940</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },

  purpleContainer: {
    width: 340,
    height: 170,
    backgroundColor: '#C9C9FF',
    marginBottom: 20,
    borderRadius: 10
  },

  blueContainer: {
    width: 340,
    height: 170,
    backgroundColor: '#3D85C6',
    marginBottom: 20,
    borderRadius: 10
  },

  greenContainer: {
    width: 340,
    height: 170,
    backgroundColor: '#96CC96',
    marginBottom: 20,
    borderRadius: 10
  },

  yellowContainer: {
    width: 340,
    height: 170,
    backgroundColor: '#F4B940',
    marginBottom: 20,
    borderRadius: 10
  },
  textInside: {
    padding: 70,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: 'sans-serif'
  }
});