import axios from "axios";
import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startGetAllContestants } from "../actions";
import { AppState } from "../store/configureStore";
import { AppActions, GET_ALL_CONTESTANTS } from "../types";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";
import { Tournament } from "../types/Tournament";

export interface IHomepageProps {
    allContestants: Contestant[];
}

interface IHomepageState {}

type Props = IHomepageProps & ILinkStateProps & ILinkDispatchProps;

class Homepage extends React.Component<Props, IHomepageState> {
    public onLoad = () => {
        this.props.startGetAllContestants();
      }

      public componentWillMount = () => {
        this.onLoad();
      }

    public render() {
        const allContestantsProp = this.props.allContestants;
        let mappedContestants;
        if (allContestantsProp) {
            mappedContestants = this.props.allContestants.map((contestant,index) => {
                return <li key={index}>{contestant.name}</li>;
            });
        }

        return (
            <div>
                <h1>Blah</h1>
                <ul>
                    {mappedContestants}
                </ul>
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
  }

const mapStateToProps = (
    state: AppState,
    ownProps: IHomepageProps,
  ): ILinkStateProps => ({
    allContestants: state.allContestants.allContestants,
    allResults: state.allResults.allResults,
    contestant: state.contestant.contestant,
    result: state.result.result,
    tournament: state.tournament.tournament,
  });

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: IHomepageProps,
  ): ILinkDispatchProps => ({
    startGetAllContestants: bindActionCreators(startGetAllContestants, dispatch),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Homepage);
