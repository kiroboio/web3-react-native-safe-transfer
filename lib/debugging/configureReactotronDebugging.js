import Reactotron from 'reactotron-react-js';
import { mst } from 'reactotron-mst';
import { accountStore } from '../stores/account';
export const configureReactotronDebugging = () => {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    const connectedReactotron = Reactotron.use(mst())
        .configure()
        .connect();
    if (connectedReactotron.trackMstNode) {
        connectedReactotron.trackMstNode(accountStore);
    }
    class ConsoleTron {
        static log(message, ...args) {
            Reactotron.display({
                name: 'LOG',
                preview: message,
                value: { message, args },
            });
        }
        static warn(message, ...args) {
            Reactotron.display({
                name: 'WARN',
                preview: message,
                value: { message, args },
                important: true,
            });
        }
        static error(message, ...args) {
            Reactotron.display({
                name: 'ERROR',
                preview: message,
                value: { message, args },
                important: true,
            });
        }
    }
    const consoleToReactotron = () => {
        if (process.env.REACT_APP_LOG_LEVEL !== 'reactotron')
            return;
        console.error = ConsoleTron.error;
        console.warn = ConsoleTron.warn;
        console.log = ConsoleTron.log;
        return;
    };
    consoleToReactotron();
};
