export const dateTimeStringToDate = (d: string) => {
    const mydate: string = d.substr(0, 10);
    const firstParse = new Date(mydate).toUTCString();
    const newDate = new Date(firstParse);
    return firstParse.slice(5, 17);
};