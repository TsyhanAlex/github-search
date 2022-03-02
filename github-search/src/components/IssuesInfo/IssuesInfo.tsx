import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useGetClosedIssuesQuery, useGetOpenIssuesQuery } from '../../redux';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';

export interface Props {
  fullName: string,
}


export function IssuesInfo(props: Props): JSX.Element {
  const {data: openIssuesData, isLoading: isOpenIssuesLoading, error: isOpenIssuesError} = useGetOpenIssuesQuery(props.fullName);
  const {data: closedIssuesData, isLoading: isClosedIssuesLoading, error: isClosedIssuesError} = useGetClosedIssuesQuery(props.fullName);

  const isLoading = isOpenIssuesLoading || isClosedIssuesLoading;
  const isError = isOpenIssuesError || isClosedIssuesError;

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>More info about issues</Typography>
      </AccordionSummary>
      {isLoading && (
        <LoadingIndicator />
      )}
      {isError && (
        <div>Something gone wrong!</div>
      )}
      {!isLoading && !isError && (
        <AccordionDetails>
          <List sx={{ pt: 0 }}>
            <ListItemText primary={`Total open issues: ${openIssuesData?.total_count}`} />
            <ListItemText primary={`Total closed issues: ${closedIssuesData?.total_count}`} />
          </List>
          {!!openIssuesData?.total_count || !!closedIssuesData?.total_count && (
            <PieChart
              className={"PieChart"}
              data={[
                { title: "Open", value: openIssuesData?.total_count, color: "#E38627" },
                { title: "Closed", value: closedIssuesData?.total_count, color: "#C13C37" }
              ]}
            />
          )}
        </AccordionDetails>
      )}
    </Accordion>
  )
}