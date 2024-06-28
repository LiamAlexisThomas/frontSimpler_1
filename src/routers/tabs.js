import { BottomNavigation } from "react-native-paper";
import { useState } from "react";
import Home from '../screens/home'
import NewSubject from '../screens/newsubjet'

export default TabsScreens = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "Home",
      title: "Inicio",
      focusedIcon: "home",
      unfocusedIcon: "home-cicle",
    },
    {
      key: "NewSubject",
      title: "Nueva Materia",
      focusedIcon: "home",
      unfocusedIcon: "home",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    NewSubject: NewSubject,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
