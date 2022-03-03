import React from 'react';
import {Input} from '@mui/material';

type Props = {
  canDisplayLabel: boolean;
  onInputChange: (searchText: string) => void;
  onEnterClicked: () => void;
}

export function InputSearch(props: Props): JSX.Element {

  function onEnterBtnClicked(btnInfo: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    if (btnInfo.code === 'Enter') {
      props.onEnterClicked();
    }
  }

  return (
    <div className="input-field">
      <Input id="search" onChange={(e) => props.onInputChange(e.target.value)} onKeyUp={((b) => onEnterBtnClicked(b))}/>
        {props.canDisplayLabel && <label htmlFor="search">Search a user on GitHub</label>}
    </div>
  )
}