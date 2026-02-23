/*
Create a caching system using localStorage.

Requirements:

Store API responses in localStorage.

Each cached item must contain:

Data

Expiration timestamp

Provide methods:

set(key, value, ttl)

get(key)

remove(key)

Automatically invalidate expired cache entries.

Handle JSON serialization safely.
*/

class LocalStorageCache{
    set(key,value,ttl){
        const data={
            value,
            expiry:Date.now() + ttl
        };
        const r=JSON.stringify(data);
        localStorage.setItem(key,r);
    }
    get(key){
        const item=localStorage.getItem(key);
        if(!item)
            return null;
        const parsed=JSON.parse(item);
        if(Date.now() > parsed.expiry){
            localStorage.removeItem(key);
            return null;
        }
        return parsed.value;
    }
    remove(key){
        localStorage.removeItem(key);
    }
}