export interface ITournament {
    id: number;
    type: string;
    name: {
        full: string;
        normal: string;
        short: string;
    };
    contestantType: string;
    url: string;
    mode: string;
    teamSize: number;
    skillLevel: string;
    series: string;
    prizePool: null;
    state: string;
    timeline: {
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
    signOff: {
        enabled?: boolean;
    };
    tags: string[];
    gameAccountType: string;
    gameIntegration: null;
    kickBanDays: number;
    matchSetupAllowed?: boolean;
    matchMediaAllowed?: boolean;
    mapvoteEnabled?: boolean;
    anticheatEnabled?: true;
    gameId: number;
    restrictions: [
        {
            type: string;
            params: {
                minmembers: number;
                maxmembers: number;
            };
        },
        {
            type: string;
            params: {
                leagueId: number;
            };
        },
        {
            type: string;
            params: {
                max: number;
            };
        },
        {
            type: string;
            params: {
                leagueId: number;
            };
        },
        {
            type: string;
            params: {
                max: number;
            };
        },
        {
            type: string;
            params: {
                leagueId: number;
            };
        },
        {
            type: string;
            params: {
                type: number;
            };
        },
        {
            type: string;
            params: { };
        },
        {
            type: string;
            params: {
                countries: [
                    string
                ],
                nationalities: [
                    string
                ],
                minmembers: number;
            }
        }
    ];
    enabledFeatures: [ ];
    contestants: {
        signedUp: number;
        checkedIn: number;
        max: number;
        maxSignedUp: null;
        maxCheckedIn: number;
    };
    signUp: {
        enabled?: boolean;
        verificationRequired?: boolean;
        premiumRequired?: boolean;
        teamRequirements: {
            minMembers: number;
            maxMembers: number;
        };
    };
    cupMode: string;
}
