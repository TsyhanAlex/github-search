import React from "react";
import {Input} from "@mui/material";

type Props = {
    onInputChange: (searchText: string) => void;
    canDisplayLabel: boolean;
}

export function InputSearch(props: Props): JSX.Element {
    return (
        <div className="input-field">
            <Input id="search" onChange={(e) => props.onInputChange(e.target.value)}/>
            {props.canDisplayLabel && <label htmlFor="search">Search a user on GitHub</label>}
        </div>
    )
}