import React from 'react';
import VideoChatContainer from './VideoContainer/VideoContainer';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CreateCall from './VideoContainer/CreateCall';

function Chat(props) {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.path}>
                <VideoChatContainer />
            </Route>
            <Route path={`${match.path}/create`}>
                <CreateCall />
            </Route>
        </Switch>
    )
}

export default Chat;