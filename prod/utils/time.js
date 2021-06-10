export var timestampWithTimeoutInSecondsToTimeLeftInSeconds = function (timestamp, timeout) {
    return ((new Date(parseInt(timestamp) * 1000).getTime() +
        parseInt(timeout) * 1000) /
        1000);
};
var formatTimeUnit = function (unit) {
    if (!unit)
        return "00";
    if (unit.toString().length === 1)
        return "0" + unit;
    return "" + unit;
};
export var formatSecondsToTime = function (seconds) {
    var days = Math.floor(seconds / (3600 * 24));
    var hours = days > 0
        ? Math.floor((seconds % (3600 * 24)) / 3600)
        : Math.floor(seconds / 3600);
    var minutes = hours > 0 ? Math.floor((seconds % 3600) / 60) : Math.floor(seconds / 60);
    var secs = minutes > 0 ? Math.floor(seconds % 60) : seconds;
    return formatTimeUnit(days) + " : " + formatTimeUnit(hours) + " : " + formatTimeUnit(minutes) + " : " + formatTimeUnit(secs);
};
