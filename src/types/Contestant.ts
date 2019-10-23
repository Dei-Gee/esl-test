import { IContestant } from "./interfaces/IContestant";
export class Contestant implements IContestant {
    public id!: number;
    public seed!: number;
    public status!: string;
    public alias!: number;
    public name!: string;
    public region!: string;
}
