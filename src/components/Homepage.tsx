import React, {  } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startGetAllContestants, startGetAllResults } from "../actions";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";
import { Tournament } from "../types/Tournament";
import "./styles/Homepage.css";

export interface IHomepageProps {
    allContestants: Contestant[];
    allResults: Result[];
}

interface IHomepageState {}

type Props = IHomepageProps & ILinkStateProps & ILinkDispatchProps;

class Homepage extends React.Component<Props, IHomepageState> {
      public componentWillMount = () => {
        this.props.startGetAllContestants();
        this.props.startGetAllResults();
      }

    public render() {
        const allContestantsProp = this.props.allContestants;
        const allResultsProp = this.props.allResults;

        let mappedContestants;
        let mappedResults;

        if (allContestantsProp) {
            mappedContestants = this.props.allContestants.map((contestant, index) => {
                return <li key={index}>{contestant.name}</li>;
            });
        }

        // if (allResultsProp) {
        //     mappedResults = this.props.allResults.map((result, index) => {
        //         return <li key={index}> {result.participants.map((participant, pindex) => <span key={pindex}>{participant.points}</span>)} </li>; });
        // }

        console.log(mappedResults);

        return (
            <div>
                <header>
                    <h1 className="tourney-name">Tournament Name</h1>
                    <p className="tourney-date">The date of the tournament</p>
                </header>
            </div>
         );
    }
}

interface ILinkStateProps {
    allContestants: Contestant[];
    allResults: Result[];
    contestant: Contestant;
    result: Result;
    tournament: Tournament;
  }
interface ILinkDispatchProps {
    startGetAllContestants: () => void;
    startGetAllResults: () => void;
  }

const mapStateToProps = (
    state: AppState,
  ): ILinkStateProps => ({
    allContestants: state.allContestants.allContestants,
    allResults: state.allResults.allResults,
    contestant: state.contestant.contestant,
    result: state.result.result,
    tournament: state.tournament.tournament,
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
  )(Homepage);
