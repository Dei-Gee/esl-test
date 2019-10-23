export interface IResult {
    id: number;
    state: string;
    bracket: number;
    round: number;
    position: number;
    participants: [
        {
            id: number;
            place: number;
            points: [
                number
            ];
        },
        {
            id: number;
            place: number;
            points: [
                number
            ];
        }
    ];
    beginAt: string;
}
