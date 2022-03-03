import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import './styles.css';

type Props = {
    onLabelClick: () => void;
}

export function Header(props: Props): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <Typography className={'Typography'}>
          <span className={'TypographyLabel'} onClick={props.onLabelClick}>GITHUB SEARCH</span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}