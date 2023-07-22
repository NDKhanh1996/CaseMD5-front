import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
    return (
        <>
            <h1 style={{paddingLeft: 10, color: "#2980b9"}}>Bình luận mới</h1>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}
            />
        </>
    );
}
