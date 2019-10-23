import { Result } from "../types/Result";

export const dateTimeStringToDate = (d: string) => {
    const mydate: string = d.substr(0, 10);
    const firstParse = new Date(mydate).toUTCString();
    return firstParse.slice(5, 17);
};

export const timeStringToDate = (d: string) => {
    const firstParse = new Date(d).toISOString();
    const newDate = new Date(firstParse);
    const mins = newDate.getUTCMinutes() < 10 ? `0${newDate.getUTCMinutes()}`:newDate.getUTCMinutes();
    return `${newDate.getUTCHours()}:${mins}`;
};

export const sortResults = (arr: Result[], order:string) : Result[] => {
    
    
    if(order === "ascending")
    {
        arr.sort(compareAsc);
    }
    if (order === "descending")
    {
        arr.sort(compareDesc);
    }
    return arr;
}

const compareAsc = (a:Result, b:Result) => {
    let t1 = Date.parse(a.beginAt);
    let t2 = Date.parse(b.beginAt);
    return t1 - t2;
}

const compareDesc = (a:Result, b:Result) => {
    let t1 = Date.parse(a.beginAt);
    let t2 = Date.parse(b.beginAt);
    return t2 - t1;
}