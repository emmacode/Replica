import Snackbar from '@mui/material/Snackbar';

export const Notification = () => {
    const { state, setState } = useState({
        open: false,
        vertical: 'top',
        horizontal: "right"
    })

    const { open, vertical, horizontal } = state;

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            />
        </>
    )
}
