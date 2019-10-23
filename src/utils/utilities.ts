export const dateTimeStringToDate = (d: string) => {
    const mydate: string = d.substr(0, 10);
    const firstParse = new Date(mydate).toUTCString();
    const newDate = new Date(firstParse);
    return firstParse.slice(5, 17);
};

export const timeStringToDate = (d: string) => {
    const mydate: string = d.substr(11, (d.length - 1));
    const firstParse = new Date(d).toISOString();
    const newDate = new Date(firstParse);
    const mins = newDate.getUTCMinutes() < 10 ? `0${newDate.getUTCMinutes()}`:newDate.getUTCMinutes();
    return `${newDate.getUTCHours()}:${mins}`;
};