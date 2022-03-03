import React, { useState } from 'react';
import {Button, Container, Grid} from '@mui/material';
import { useGetUserQuery } from '../../redux';
import {Header} from '../Header/Header';
import {GithubDataResponseItems} from '../../redux/types/GetGithubDataResponse';
import { InputSearch } from '../InputSearch/InputSearch';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { UserCard } from '../UserCard/UserCard';
import './styles.css';

export function Layout(): JSX.Element {

    const [searchParam, setSearchParam] = useState<string>('');
    const [isSubmittedSearchParam, setIsSubmittedSearchParam] = useState<boolean>(false);

    const {data, isLoading, error} = useGetUserQuery(searchParam, { skip: !isSubmittedSearchParam });

    function onInputChanged(searchText: string): void {
        setSearchParam(searchText);
        setIsSubmittedSearchParam(false);
    }

    function onSubmitBtnClicked(): void {
        setIsSubmittedSearchParam(true);
    }

    return (
        <Container className={'Container'}>
            <div className="App">
                <Header onLabelClick={() => window.location.href='/'} />
                <div className={'SearchBlock'}>
                    <InputSearch canDisplayLabel={!searchParam.trim()} onInputChange={onInputChanged} onEnterClicked={onSubmitBtnClicked}/>
                    <Button className={'SubmitBtn'} onClick={onSubmitBtnClicked}>Submit</Button>
                </div>
                {isLoading && <LoadingIndicator/>}
                {error && !isLoading && <div>Something gone wrong!</div>}
                {!error && !isLoading && !data?.items?.length && (<h3>Let's start searching or changing the search value</h3>)}
                {!error && !isLoading && (
                    <Grid container spacing={2}>
                        {data?.items ? data?.items.map((item: GithubDataResponseItems) => <Grid key={item.url} item xs={3}><UserCard key={item.id} user={item}/></Grid>) : null}
                    </Grid>
                )}
            </div>
        </Container>
    )
}
