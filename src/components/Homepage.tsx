import React, {  } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startGetAllContestants, startGetAllResults, startGetTournament } from "../actions";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types";
import { Contestant } from "../types/Contestant";
import { Result } from "../types/Result";
import { Tournament } from "../types/Tournament";
import { dateTimeStringToDate } from "../utils/utilities";
import MatchResults from "./MatchResults";
import "./styles/Homepage.css";

export interface IHomepageProps {
    tournament: Tournament;
    history: {};
    match: {
        params: {
            tourneyId: string;
        },
    };
    location: {};
}

interface IHomepageState {}

type Props = IHomepageProps & ILinkStateProps & ILinkDispatchProps;

class Homepage extends React.Component<Props, IHomepageState> {
      public componentDidMount = async () => {
        try {
            this.props.startGetTournament(this.props.match.params.tourneyId);
        } catch (e) {
            console.log("can't get items");
        }
    }

    public render() {
        const tournamentProp = this.props.tournament;

        console.log(tournamentProp);

        if (tournamentProp) {
            return (
                <div>
                    <header>
                        <h1 className="tourney-name">{tournamentProp.name.normal}</h1>
                        <p className="tourney-date">{dateTimeStringToDate(tournamentProp.timeline.inProgress.begin)}</p>
                    </header>

                    <section className="main">
                        <MatchResults tourneyId={tournamentProp.id} />
                    </section>

                </div>
             );
        } else {
            return(
                <div> The data could not be fetched in time </div>
            );
        }
    }
}

interface ILinkStateProps {
    tournament: Tournament;
  }
interface ILinkDispatchProps {
    startGetTournament: (id: string) => void;
  }

const mapStateToProps = (
    state: AppState,
  ): ILinkStateProps => ({
    tournament: state.tournament.tournament,
  });

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
  ): ILinkDispatchProps => ({
    startGetTournament: bindActionCreators(startGetTournament, dispatch),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Homepage);
