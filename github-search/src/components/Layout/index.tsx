import {Header} from "../Header";
import {Button, Container, Grid} from "@mui/material";
import {GithubApi} from "../../api/GithubApi";
import React, {useState} from "react";
import {GithubDataResponseItems} from "../../api/GetGithubDataResponse";
import {UserCard} from "../UserCard";
import './styles.css';
import {LoadingIndicator} from "../LoadingIndicator";
import {InputSearch} from "../InputSearch";

export function Layout(): JSX.Element {

    const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
    const [isErrorLoading, setIsErrorLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [githubResponse, setGithubResponse] = useState<GithubDataResponseItems[] | null>(null);
    const [searchParam, setSearchParam] = useState<string>('');

    function onSubmitBtnClicked(): void {
        if (!searchParam.trim()) {
            return;
        }

        setIsDataLoading(true);
        GithubApi.getGithubData(searchParam.trim())
            .then((res) => {
                setGithubResponse(res.items);
            })
            .catch((error) => {
            setIsErrorLoading(true);
            setErrorMessage(error?.message);
        })
            .finally(() => setIsDataLoading(false));
    }

    return (
        <Container className={'Container'}>
            <div className="App">
                <Header onLabelClick={() => window.location.href='/'} />
                <div className={'SearchBlock'}>
                    <InputSearch canDisplayLabel={!searchParam.trim()} onInputChange={setSearchParam}/>
                    <Button className={'SubmitBtn'} onClick={onSubmitBtnClicked}>Submit</Button>
                </div>
                {isDataLoading && <LoadingIndicator/>}
                {isErrorLoading && !isDataLoading && <div>{`Something gone wrong! ${errorMessage}`}</div>}
                {!isErrorLoading && !isDataLoading && !githubResponse?.length && (<h3>Let's start searching or changing the search value</h3>)}
                {!isErrorLoading && !isDataLoading && (
                    <Grid container spacing={2}>
                        {githubResponse ? githubResponse.map(item => <Grid item xs={3}><UserCard user={item}/></Grid>) : null}
                    </Grid>
                )}
            </div>
        </Container>
    )
}
