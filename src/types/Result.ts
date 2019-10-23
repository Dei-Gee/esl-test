import { IResult } from "./interfaces/IResult";
export class Result implements IResult {
    public id!: number;
    public state!: string;
    public bracket!: number;
    public round!: number;
    public position!: number;
    public participants!: [{
        id: number;
        place: number;
        points: [number];
    }, {
        id: number;
        place: number;
        points: [number];
    }];
    public beginAt!: string;
}
