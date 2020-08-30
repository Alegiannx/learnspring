import React from 'react';
import { Box } from '@material-ui/core';

export default function Title(props) {
    return (
        <Box fontSize={30}>
            <h1>{props.text}</h1>
        </Box>
    );
}
