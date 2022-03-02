import React, {useState} from 'react';
import {GithubDataResponseItems} from '../../redux/types/GetGithubDataResponse';
import './styles.css';
import {UserInfoPage} from '../UserInfoPage/UserInfoPage';

export type Props = {
  user: GithubDataResponseItems
}

export function UserCard(props: Props): JSX.Element {

  const [isModalWindowOpen, setIsModalWindowOpen] = useState<boolean>(false);

  return (
    <div className="card">
      <UserInfoPage user={props.user} open={isModalWindowOpen} onClose={() => setIsModalWindowOpen(false)}/>
      <div className={"card-image"} onClick={() => setIsModalWindowOpen(true)}>
        <img className={'UserImage'} src={props.user.owner.avatar_url} alt={'a github user avatar'}/>
        <span className="card-title">{props.user.owner.login}</span>
      </div>
      <div className="card-action">
        <a href={props.user.owner.html_url} target="_blank" rel="noopener noreferrer">Open on Github</a>
      </div>
    </div>
  )
}