import { BottomNavigation } from "react-native-paper";
import { useState } from "react";

export default TabsScreens = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "",
      title: "",
      focusedIcon: "",
      unfocusedIcon: "",
      color: "",
    },
    {
      key: "",
      title: "",
      focusedIcon: "",
      unfocusedIcon: "",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    key: vista,
    key: vista,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
