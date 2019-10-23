import { connect } from "http2";
import * as React from "react";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startGetAllContestants, startGetAllResults, startGetTournament } from "../actions";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";

export interface IMatchResultsProps {
    allResults: Result[];
}

export interface IMatchResultsState {

}

class MatchResults extends React.Component<IMatchResultsProps, IMatchResultsState> {

    public componentDidMount = () => {
        try {
            this.props.startGetAllResults();
        } catch (e) {
            console.log("can't get items");
        }
    }

    public render() {
        return (
            <div>
                <div className="result-filter">
                    <select>
                        <option>Date: Ascending</option>
                        <option>Date: Descending</option>
                    </select>
                </div>

                <section className="score-wrapper">
                    <div className="match-time">Time</div>
                    <div className="team"><span>Team 1</span> <span>0</span></div>
                    <div className="team"><span>Team 1</span> <span>0</span></div>
                </section>

                <section className="score-wrapper">
                    <div className="match-time">Time</div>
                    <div className="team"><span>Team 1</span> <span>0</span></div>
                    <div className="team"><span>Team 1</span> <span>0</span></div>
                </section>
            </div>
         );
    }
}

interface ILinkStateProps {
    contestants: Contestant[];
    results: Result[];
  }
interface ILinkDispatchProps {
    startGetAllContestants: () => void;
    startGetAllResults: () => void;
  }

const mapStateToProps = (
    state: AppState,
  ): ILinkStateProps => ({
    contestants: state.allContestants.allContestants,
    results: state.allResults.allResults,
  });

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
  ): ILinkDispatchProps => ({
    startGetAllContestants: bindActionCreators(startGetAllContestants, dispatch),
    startGetAllResults: bindActionCreators(startGetAllResults, dispatch),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MatchResults);

