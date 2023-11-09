import { useEffect, useState } from 'react';

class UserT {
    constructor(userDataJson) {
        if (userDataJson != null) {
            this.raju = true;
            const data = JSON.parse(userDataJson) || {};

            this.name = data.name || '';
            this.age = data.age || '';
            this.sex = data.sex || '';
            this.addr = data.addr || '';
            this.email = data.email || '';
            this.phone = data.phone || '';
            this.dp = data.dp || '';
            this.role = data.role || '';
            this._id = data._id || '';
            this.createdAt = data.createdAt || '';
            this.updatedAt = data.updatedAt || '';
            this.__v = data.__v || 0;
        } else {
            this.raju = false;
        }
    }
}

function UserX() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userDataJson = window.localStorage.getItem('user');
        setUser(new UserT(userDataJson));
    }, []);

    return user;
}

export default UserX;