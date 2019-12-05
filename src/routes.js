import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Routes = createSwitchNavigator({
    Login,
    Main
})


export default createAppContainer(Routes);  