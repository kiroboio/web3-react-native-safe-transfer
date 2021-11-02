export const wait = (timeToWait: number):Promise<unknown> => new Promise((resolve) => setTimeout(resolve, timeToWait))