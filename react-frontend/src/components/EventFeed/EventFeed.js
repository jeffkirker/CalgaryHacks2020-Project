import React, { Component } from 'react'
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

export default class EventFeed extends Component {
    render() {
        return (
            <StreamApp
                apiKey="fpwesm5u2evu"
                appId="64527"
                token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.cM6zFlcQ68qP2LLz-Y6fPeNglfOuwB2aeBUaQild1wg"
            >
                <FlatFeed
                    options={{ limit: 3, withRecentReactions: true }}
                    Activity={(props) => (
                        <Activity
                            {...props}
                            onClickHashtag={(word) => console.log(`clicked on ${word}`)}
                            onClickMention={(word) => console.log(`clicked on ${word}`)}
                            Footer={() => (
                                <React.Fragment>
                                    {/* <ActivityFooter {...props} /> */}
                                    {/* <CommentList activityId={props.activity.id} /> */}
                                </React.Fragment>
                            )}
                        />
                    )}
                />
            </StreamApp>
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
