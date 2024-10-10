import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Colors } from 'themes/colors'
import Logout from 'screens/Logout/Logout'
import Home from 'presentation/screens/Home/Home'
import Search from 'presentation/screens/Search/Search'
import Detail from 'presentation/screens/Detail/Detail'

const MovieStack = createNativeStackNavigator()
const MoviesNavigator = () => {
    return (
        <MovieStack.Navigator screenOptions={{ headerShown: false }}>
            <MovieStack.Screen name={Home.name} component={Home} />
            <MovieStack.Screen name={Search.name} component={Search} />
            <MovieStack.Screen name={Detail.name} component={Detail} />

        </MovieStack.Navigator>
    )
}

export { MoviesNavigator }