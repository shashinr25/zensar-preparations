import UserProvider from './UserContext';
import ContextChildComp from './ContextChildComp';

function ContextComp() {
    return (
        <UserProvider>
            <ContextChildComp />
        </UserProvider>
    )
};

export default ContextComp;