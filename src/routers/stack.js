import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login"
import Singup from "../screens/singup"
import TabsScreens from "./tabs"


export default StackScreens = () => {
    const Stack = createNativeStackNavigator();

 return (
    <Stack.Navigator>
        <Stack.Screen component={Login} name='login' options={opciones}/>
        <Stack.Screen component={Singup} name='crearcuenta' options={opciones}/>
        <Stack.Screen component={TabsScreens} name='tabs' options={opciones}/>
    </Stack.Navigator>
 )
}