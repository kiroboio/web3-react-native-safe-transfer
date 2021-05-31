export const timestampWithTimeoutInSecondsToTimeLeftInSeconds = (
  timestamp: string,
  timeout: string
) => {
  return (
    (new Date(parseInt(timestamp) * 1000).getTime() +
      parseInt(timeout) * 1000) /
    1000
  );
};

const formatTimeUnit = (unit: number) => {
  if (!unit) return "00";
  if (unit.toString().length === 1) return `0${unit}`;
  return `${unit}`;
};

export const formatSecondsToTime = (seconds: number) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours =
    days > 0
      ? Math.floor((seconds % (3600 * 24)) / 3600)
      : Math.floor(seconds / 3600);
  const minutes =
    hours > 0 ? Math.floor((seconds % 3600) / 60) : Math.floor(seconds / 60);
  const secs = minutes > 0 ? Math.floor(seconds % 60) : seconds;

  return `${formatTimeUnit(days)} : ${formatTimeUnit(hours)} : ${formatTimeUnit(
    minutes
  )} : ${formatTimeUnit(secs)}`;
};
