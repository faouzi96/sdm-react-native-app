import React from "react";
import { View } from "react-native";
import { makeStyles, Text, useThemeMode, Input, Button } from "@rneui/themed";
import { Feather, Entypo } from "@expo/vector-icons";

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const loginPress = ()=>{
    alert("button pressed")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text h4>SMPark</Text>
        </View>
        <View style={styles.themeSwitcher}>
          <Feather name="sun" size={24} color="black" />
        </View>
      </View>
      <View style={styles.mainContent}>
        <Input placeholder="USER NAME" />
        <Input placeholder="PASSWORD" />
        <Button radius={"sm"} type="solid" size="lg" onPress={loginPress}>
          Login
        </Button>
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f00",
    width: "100%",
  },
  title: {
    flex: 1,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 5,
    paddingLeft: 20,
  },
  themeSwitcher: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20,
    justifyContent: "center",
    height: "100%",
    paddingTop: 10,
  },
  mainContent: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
