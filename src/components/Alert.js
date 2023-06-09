import * as React from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertBox = ({ children, ...props }) => {
    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    open={props.open}
                    autoHideDuration={6000}
                    onClose={props.onClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert onClose={props.onClose} severity="success" sx={{ width: '100%' }}>
                        {children}
                    </Alert>
                </Snackbar>
            </Stack>
        </>
    )
}
