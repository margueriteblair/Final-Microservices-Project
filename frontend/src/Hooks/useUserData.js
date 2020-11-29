import React, {useState} from 'react';
import { get } from '../utils/localStorage';


export default function useUserData() {
    const [userData, setUserData] = useState(() => 
        get("userData", null)
    )

    return (userData == null) ? [false, null] : [true, userData.username]
    
}