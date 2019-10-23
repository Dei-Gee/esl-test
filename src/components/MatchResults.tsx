import * as React from "react";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";
import axios from "axios";
import { timeStringToDate, sortResults } from "../utils/utilities";

export interface IMatchResultsProps {
    tourneyId: string;
}

export interface IMatchResultsState {
    allResults: Result[];
    allContestants: Contestant[];
    sortingOrder: string;
}


class MatchResults extends React.Component<IMatchResultsProps, IMatchResultsState> {
    constructor(props: any)
    {
        super(props);
        this.onChangeOrder = this.onChangeOrder.bind(this);
        this.state = {
            allResults: [], 
            allContestants: [], 
            sortingOrder: "", // default sorting order none
        }
    }

    public componentDidMount = () => {
        try {
            // one render to rule them all - yay for Promises
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
                    allResults : sortResults(results, "ascending"),
                    allContestants : contstants,
                })
            })
        } catch (e) {
            console.log("can't get items");
        }
    }

    
    // getting team/contestant name
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

    // sorting and assigning the results array to the state
    public sortArray = (myArr: Result[], order: string) => {
        sortResults(myArr, order);
        this.setState({
            allResults: myArr
        })
    }

    // event handler for sorting order of results
    public onChangeOrder = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var sortingOrder: string = event.currentTarget.value;

        console.log(sortingOrder); 

        this.sortArray(this.state.allResults, sortingOrder);

        this.setState({
            sortingOrder: sortingOrder
        });

    }

    public render() {
        const allResultsProp = this.state.allResults;
        console.log(this.state.allResults);
        console.log(this.state.allContestants);

        let mappedResults = allResultsProp.map((result, index) => {
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
                <select className="form-control" id="searchType" onChange={ e => this.onChangeOrder(e) } value={ this.state.sortingOrder }>
                    <option value="ascending">Date: Ascending</option>
                    <option value="descending">Date: Descending</option>
                </select>
                </div>

                {mappedResults}
            </div>
         );
    }
}

export default MatchResults;

