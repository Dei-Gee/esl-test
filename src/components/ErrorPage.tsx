import React, {  } from "react";

export interface ErrorPageProps {

}

export interface ErrorPageState {

}

class ErrorPage extends React.Component<ErrorPageProps, ErrorPageState> {
    constructor(props: ErrorPageProps) {
        super(props);
        this.state = {   };
    }
    public render() {
        return (
            <div>
                <h1> Error! Please enter a tourney id in the address bar!</h1>
                <p>
                    please note that the format of the address should be in
                     the format of https://mywebsite.ca/[tourneyid] e.g.https://mywebsite.ca/177161
                </p>
            </div>
         );
    }
}

export default ErrorPage;
