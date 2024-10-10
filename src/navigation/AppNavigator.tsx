import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MoviesNavigator } from "./AppNavigatorStack"
const AppNavigator = () => {
    const AppStack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }} >
                {<AppStack.Screen component={MoviesNavigator} name={MoviesNavigator.name}></AppStack.Screen>}
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator
