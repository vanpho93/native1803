import React, { Component } from 'react';
import { Account } from './Account';
import { SignIn } from './SignIn';
import { StackNavigator } from 'react-navigation';

// export class Stack extends Component {
//     render() {
//         return (
//             <Account />
//         );
//     }
// }

export const Stack = StackNavigator({
    SignIn: { screen: SignIn },
    Account: { screen: Account },
}, { headerMode: 'none' });
