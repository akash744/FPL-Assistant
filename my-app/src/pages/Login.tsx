import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import travel_01 from "./assets/travel-01.jpg";


import { withStyles, createStyles, Theme, createTheme, ThemeProvider } from "@material-ui/core/styles";
import zIndex from '@material-ui/core/styles/zIndex';

type LoginProps = {
    classes: {
        root: string;
        image: string;
        paper: string;
        avatar: string;
        form:string;
        submit: string;
        backdrop: string;
      };    
}

type LoginState = {
    email: string,
    password: string,
    loggedIn: boolean,
    loading: boolean
}   

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://www.kotaku.com.au/content/uploads/sites/3/2020/08/12/t4pxhhsznquxjoht3ky3.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        color: "#00ff87",
        backgroundColor: "#37003c",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zindex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#38003c',
    },
  },
});



class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            loggedIn: false,
            loading: false
        };
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({email: event.target.value})
      }
    

    render() {
        const { classes } = this.props;

        return (
          <ThemeProvider theme={theme}>
            <div>
              <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                      <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign In to FPL
                    </Typography>
                    <form
                      className={classes.form}
                      noValidate
                    >
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onInput={this.handleChange}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onInput={this.handleChange}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link
                            href="https://users.premierleague.com/accounts/password-reset"
                            variant="body2"
                          >
                            Or Login With Google
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link
                            href="https://users.premierleague.com/a/profile/register"
                            variant="body2"
                          >
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Grid>
              </Grid>
              <Backdrop className={classes.backdrop} open={this.state.loading}>
                <CircularProgress color="inherit"/>
              </Backdrop>
            </div>
          </ThemeProvider>
        );
    }
}

export default (withStyles(styles)(Login));