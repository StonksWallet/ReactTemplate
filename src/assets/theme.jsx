import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    palette: {
      'light-gray': {
        main: '#545D69',
      },
      purple: {
        main: '#5D5FEF',
      },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                style: {
                    borderRadius: 32,
                    textTransform: 'none',
                    width: '100%',
                }
            }
        }
    }
});

export default theme 