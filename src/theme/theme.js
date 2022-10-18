import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#BAB653',
            700: '#96A07B',
            200: '#DBE2C4',
            p: '#eee882'
        },
        secondary: {
            main: '#FB931B',
            contrastText: '#fff',
        },
        grey: {
            main: 'rgba(0, 0, 0, 0.60)',
        },
        lightOrange: {
            main: '#FCB356',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        // info: {
        //     main: '#FCB356',
        // },
        action: {
            hoverOpacity: 0.13,
        }
    },
    typography: {
        body1: {
            fontFamily: " 'Nunito Sans', 'Roboto', 'Arial', sans-serif"
        }
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    margin: '25px 20px',
                    borderRadius: '20px',
                    flexGrow: 'unset',
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(186, 182, 83, 0.25)',
                    },
                }
            }
        }
    }
    // typography: {
    //     fontFamily: [
    //         'Nunito Sans',
    //         '-apple-system',
    //         'BlinkMacSystemFont',
    //         'Roboto',
    //         '"Helvetica Neue"',
    //         'sans-serif',
    //     ].join(','),
    // },
    // components: {
    //     MuiFormControlLabel: {
    //         styleOverrides: {
    //             label: {
    //                 fontFamily:"'Nunito Sans', sans-serif"
    //             },
    //         },
    //     },
    //     MuiTab: {
    //         styleOverrides: {
    //             root: {
    //                 fontWeight: 700
    //             },
    //         },
    //     },
    //     MuiFab: {
    //         styleOverrides: {
    //             root: {
    //                 fontWeight: 700
    //             },
    //         },
    //     },
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 fontWeight: 700
    //             },
    //         },
    //     },
    // },
})