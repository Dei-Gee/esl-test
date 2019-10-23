import { connect } from "react-redux";
import * as React from "react";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startGetAllContestants, startGetAllResults, startGetTournament } from "../actions";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";
import axios from "axios";
import { dateTimeStringToDate, timeStringToDate } from "../utils/utilities";

export interface IMatchResultsProps {
    tourneyId: string;
}

export interface IMatchResultsState {
    allResults: Result[];
    allContestants: Contestant[];
}


class MatchResults extends React.Component<IMatchResultsProps, IMatchResultsState> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            allResults: [], 
            allContestants: []
        }
    }

    public componentDidMount = () => {
        try {
            Promise.all([
                axios.get(`https://api.eslgaming.com/play/v1/leagues/${this.props.tourneyId}/results`)
                .then((response) => {
                    return response.data;
                }),
                axios.get(`https://api.eslgaming.com/play/v1/leagues/${this.props.tourneyId}/contestants`)
                .then((response) => {
                    return response.data;
                })
            ]).then(([results, contstants]) => {
                this.setState({
                    allResults : results,
                    allContestants : contstants
                })
            })
        } catch (e) {
            console.log("can't get items");
        }
    }

    public getContestant = (contestantId: number | string) => {
        let name: string = "";
        for(let i:number = 0; i < this.state.allContestants.length; i++)
        {
            if(this.state.allContestants[i].id === contestantId) 
            {
                return this.state.allContestants[i].name
            }
        }
        return name;
    }

    public render() {
        const allResultsProp = this.state.allResults;
        const allContestantsProp = this.state.allContestants;
        console.log(this.state.allResults);
        console.log(this.state.allContestants);

        const mappedResults = allResultsProp.map((result, index) => {
            let team1Points = result.participants[0].points;
            let team2Points = result.participants[1].points;
            return <section className="score-wrapper" key={index}>
                        <div className="match-time">{timeStringToDate(result.beginAt)}</div>
                        <div className={`team ${team1Points > team2Points ? "winner" : "loser"}`}>
                            <span>{this.getContestant(result.participants[0].id)}</span> 
                            <span className={`score ${team1Points > team2Points ? "winning-score" : "losing-score"}`}>{team1Points}</span>
                        </div>
                        <div className={`team ${team2Points > team1Points ? "winner" : "loser"}`}>
                            <span>{this.getContestant(result.participants[1].id)}</span> 
                            <span className={`score ${team2Points > team1Points ? "winning-score" : "losing-score"}`}>{team2Points}</span>
                        </div>
                    </section>;
        });

        return (
            <div className="main">
                <div className="result-filter">
                    <select>
                        <option>Date: Ascending</option>
                        <option>Date: Descending</option>
                    </select>
                </div>

                {mappedResults}
            </div>
         );
    }
}

export default MatchResults;

