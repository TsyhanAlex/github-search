import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {GithubDataResponseItems} from '../../redux/types/GetGithubDataResponse';
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
        <ListItemText key={props.user?.url} className={'ListItemLink'}  primary={`URL: ${props.user?.url}`} onClick={() => window.open(`${props.user?.url}`, '_blank')} />
        <ListItemText key={props.user?.description} className={'ListItem'}  primary={`Description: ${props.user?.description}`} />
        <ListItemText key={props.user?.forks_count} className={'ListItem'}  primary={`Forks count: ${props.user?.forks_count}`} />
        <ListItemText key={props.user?.stargazers_count} className={'ListItem'}  primary={`Stargazers count: ${props.user?.stargazers_count}`} />
        <ListItemText key={props.user?.open_issues_count} className={'ListItem'}  primary={`Open issues: ${props.user?.open_issues_count}`} />
        <ListItemText key={props.user?.watchers_count} className={'ListItem'}  primary={`Watchers count: ${props.user?.watchers_count}`} />
      </List>
    </Dialog>
  );
}
