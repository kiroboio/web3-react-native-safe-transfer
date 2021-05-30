import { useWhatChanged } from '@simbathesailor/use-what-changed';
export const useWhatChangedDev = process.env.NODE_ENV !== 'development'
    ? () => ({})
    : (hookDescription, deps) => {
        const depsArray = [hookDescription];
        let depsNames = 'hook description,';
        if (deps) {
            Object.keys(deps).forEach((key) => {
                depsArray.push(deps[key]);
                depsNames += `${key},`;
            });
        }
        useWhatChanged(depsArray, depsNames);
    };
