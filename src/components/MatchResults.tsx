import { connect } from "react-redux";
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
    allContestants: Contestant[];
    tourneyId: string;
}

export interface IMatchResultsState {

}

type Props = IMatchResultsProps & ILinkStateProps & ILinkDispatchProps;

class MatchResults extends React.Component<Props, IMatchResultsState> {

    public componentDidMount = () => {
        try {
            if(this.props.allResults === null || this.props.allResults || undefined)
            {
                this.props.startGetAllResults();
                this.props.startGetAllContestants(this.props.tourneyId);
            }
        } catch (e) {
            console.log("can't get items");
        }
    }

    public render() {
        console.log(this.props.tourneyId)
        return (
            <div className="main">
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
    allContestants: Contestant[];
    allResults: Result[];
  }
interface ILinkDispatchProps {
    startGetAllContestants: (tourneyId: string) => void;
    startGetAllResults: () => void;
  }

const mapStateToProps = (
    state: AppState,
  ): ILinkStateProps => ({
    allContestants: state.allContestants.allContestants,
    allResults: state.allResults.allResults,
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

