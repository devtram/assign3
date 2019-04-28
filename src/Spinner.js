import React from "react";
import { View, ActivityIndicator } from "react-native";
// Functional component for the display only
const Spinner = ({ size }) => {
return (
<View style={styles.spinnerStyle}>
<ActivityIndicator size={size || "small"} color={"green"} style={{color:"green"}}/>
</View>
);
};

const styles = {
spinnerStyle: {
flex: 1,
justifyContent: "center",
alignItems: "center",
}
};

export { Spinner };