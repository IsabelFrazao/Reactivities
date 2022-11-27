import React from "react";
import { Button, Icon, Item, ItemHeader, Segment } from 'semantic-ui-react';
import { Activity } from "../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </ItemHeader>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group> 
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue} 
                </span>
            </Segment>
            <Segment secondary>
                Attendees Go Here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}