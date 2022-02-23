import React from "react";
import {GithubDataResponseItems} from "../../api/GetGithubDataResponse";
import './styles.css';

export type Props = {
    user: GithubDataResponseItems
}

export function UserCard(props: Props): JSX.Element {

    function onUserCardClicked(): void {
        window.location.href=`/card/${props.user.owner.id}`;
    }

    return (
        <div className="card">
            <div className={"card-image"} onClick={onUserCardClicked}>
                <img className={'UserImage'} src={props.user.owner.avatar_url} alt={'a github user image'}/>
                <span className="card-title">${props.user.owner.login}</span>
            </div>
            <div className="card-action">
                <a href={props.user.owner.html_url} target="_blank">Open on Github</a>
            </div>
        </div>
    )
}