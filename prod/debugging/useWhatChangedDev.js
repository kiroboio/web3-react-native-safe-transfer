import { useWhatChanged } from "@simbathesailor/use-what-changed";
export var useWhatChangedDev = process.env.NODE_ENV !== "development"
    ? function () { return ({}); }
    : function (hookDescription, deps) {
        var depsArray = [hookDescription];
        var depsNames = "hook description,";
        if (deps) {
            Object.keys(deps).forEach(function (key) {
                depsArray.push(deps[key]);
                depsNames += key + ",";
            });
        }
        useWhatChanged(depsArray, depsNames);
    };
