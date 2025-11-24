// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { SignedInStack, SignedOutStack } from './Navigation'
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const AuthNavigation = () => {

//     const [currentUser, setCurrentUser]= useState(null)

//     const useHandler = user => user? setCurrentUser(user) : setCurrentUser(null);

//     useEffect(()=>{
//         firebase.auth().onAuthStateChanged( user => useHandler(user))
//     },[])

//   return (
    
//     <>
//     {currentUser ? <SignedInStack/> : <SignedOutStack/>}
//     </>
//   )
// }

// export default AuthNavigation



import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SignedInStack, SignedOutStack } from './Navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import from the new SDK

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        const auth = getAuth(); // Get the Auth instance

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user); // Set the current user directly
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <>
            {currentUser ? <SignedInStack /> : <SignedOutStack />}
        </>
    );
}

export default AuthNavigation;
