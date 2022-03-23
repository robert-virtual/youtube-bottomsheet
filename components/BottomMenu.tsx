import { FC, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View } from "./Themed";

interface Props {
  visible: boolean;
}

export const BottomMenu: FC<Props> = ({ children, visible }) => {
  const [height] = useState(200);
  const [bottom, setBottom] = useState(0);
  function toggleBottom() {
    if (bottom == -height) {
      // visible
      setBottom(0);

      return;
    }
    // no visible
    setBottom(-height);
  }
  useEffect(() => {
    toggleBottom();
  }, [visible]);

  return (
    <View
      onTouchEnd={() => setBottom(-height)}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#222222e2",
        bottom: bottom != 0 ? "-100%" : 0,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 5 }}
        style={{
          backgroundColor: "#333",
          width: "100%",
          position: "absolute",
          bottom,
          height,
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
