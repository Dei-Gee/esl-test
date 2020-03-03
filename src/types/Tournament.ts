import { ITournament } from "./interfaces/ITournament";
export class Tournament implements ITournament {
    public id!: number;
    public type!: string;
    public name!: {
        full: string;
        normal: string;
        short: string;
    };
    public contestantType!: string;
    public url!: string;
    public mode!: string;
    public teamSize!: number;
    public skillLevel!: string;
    public series!: string;
    public prizePool!: null;
    public state!: string;
    public timeline!: {
        signUp: {
            begin: string;
            end: string;
        };
        inProgress: {
            begin: string;
            end: string;
        };
        finsihed: {
            begin: string;
        };
        checkIn: {
            begin: string;
            end: string;
        };
        lateSignUp: {
            begin: string;
            end: string;
        };
    };
    public signOff!: {
        enabled?: boolean;
    };
    public tags!: string[];
    public gameAccountType!: string;
    public gameIntegration!: null;
    public kickBanDays!: number;
    public matchSetupAllowed?: boolean;
    public matchMediaAllowed?: boolean;
    public mapvoteEnabled?: boolean;
    public anticheatEnabled?: true;
    public gameId!: number;
    public restrictions!: [{
        type: string;
        params: {
            minmembers: number;
            maxmembers: number;
        };
    }, {
        type: string;
        params: {
            leagueId: number;
        };
    }, {
        type: string;
        params: {
            max: number;
        };
    }, {
        type: string;
        params: {
            leagueId: number;
        };
    }, {
        type: string;
        params: {
            max: number;
        };
    }, {
        type: string;
        params: {
            leagueId: number;
        };
    }, {
        type: string;
        params: {
            type: number;
        };
    }, {
        type: string;
        params: {};
    }, {
        type: string;
        params: {
            countries: [string];
            nationalities: [string];
            minmembers: number;
        };
    }];
    public enabledFeatures!: [];
    public contestants!: {
        signedUp: number;
        checkedIn: number;
        max: number;
        maxSignedUp: null;
        maxCheckedIn: number;
    };
    public signUp!: {
        enabled?: boolean;
        verificationRequired?: boolean;
        premiumRequired?: boolean;
        teamRequirements: {
            minMembers: number;
            maxMembers: number;
        };
    };
    public cupMode!: string;

}
