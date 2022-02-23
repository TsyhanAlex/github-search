import React from "react";
import {Input} from "@mui/material";

type Props = {
    onSubmitClicked: (e: any) => void;
    canDisplayLabel: boolean;
}

export function InputSearch(props: Props): JSX.Element {
    return (
        <div className="input-field">
            <Input id="search" />
            {props.canDisplayLabel && <label htmlFor="search">Search a user on GitHub</label>}
        </div>
    )
}