/* import { useContext } from 'react';
import { UserContext } from './UserContext';

function ContextChildComp() {
    const userContext = useContext(UserContext);

    return (
        <h1> {userContext.name} </h1>
    )
}

export default ContextChildComp; */

import { useUser } from './UserContext';

function ContextChildComp() {
    const user = useUser();

    return (
        <h1> {user.name} </h1>
    )
}

export default ContextChildComp;