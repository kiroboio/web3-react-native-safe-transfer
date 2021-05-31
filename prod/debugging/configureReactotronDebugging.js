import Reactotron from "reactotron-react-js";
import { mst } from "reactotron-mst";
import { accountStore } from "../stores/account";
export var configureReactotronDebugging = function () {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    var connectedReactotron = Reactotron.use(mst())
        .configure()
        .connect();
    if (connectedReactotron.trackMstNode) {
        connectedReactotron.trackMstNode(accountStore);
    }
    var ConsoleTron = /** @class */ (function () {
        function ConsoleTron() {
        }
        ConsoleTron.log = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            Reactotron.display({
                name: "LOG",
                preview: message,
                value: { message: message, args: args },
            });
        };
        ConsoleTron.warn = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            Reactotron.display({
                name: "WARN",
                preview: message,
                value: { message: message, args: args },
                important: true,
            });
        };
        ConsoleTron.error = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            Reactotron.display({
                name: "ERROR",
                preview: message,
                value: { message: message, args: args },
                important: true,
            });
        };
        return ConsoleTron;
    }());
    var consoleToReactotron = function () {
        if (process.env.REACT_APP_LOG_LEVEL !== "reactotron")
            return;
        console.error = ConsoleTron.error;
        console.warn = ConsoleTron.warn;
        console.log = ConsoleTron.log;
        return;
    };
    consoleToReactotron();
};
