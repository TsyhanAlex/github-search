import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {GithubDataResponseItems} from "../../api/GetGithubDataResponse";
import './styles.css';

export interface Props {
    user: GithubDataResponseItems;
    open: boolean;
    onClose: () => void;
}

export function UserInfoPage(props: Props): JSX.Element {

    return (
        <Dialog onClose={props.onClose} open={props.open}>
            <DialogTitle>{`Additional info about ${props.user?.name}`}</DialogTitle>
            <List sx={{ pt: 0 }}>
                <ListItemText className={'ListItem'}  primary={`URL: ${props.user?.url}`} />
                <ListItemText className={'ListItem'}  primary={`Description: ${props.user?.description}`} />
                <ListItemText className={'ListItem'}  primary={`Forks count: ${props.user?.forks_count}`} />
                <ListItemText className={'ListItem'}  primary={`Stargazers count: ${props.user?.stargazers_count}`} />
                <ListItemText className={'ListItem'}  primary={`Open issues: ${props.user?.open_issues_count}`} />
                <ListItemText className={'ListItem'}  primary={`Watchers count: ${props.user?.watchers_count}`} />
            </List>
        </Dialog>
    );
}
