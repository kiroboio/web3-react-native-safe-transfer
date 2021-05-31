import { useState } from "react";
export var useLocalStorage = function (key, initialValue) {
    var _a = useState(function () {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};
