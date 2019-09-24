import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCurrencyClose = () => {
    props.changeCurrency(event.target.innerText);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bitcoin Price Charts
          </Typography>
          <Button aria-controls="menu-currencies" aria-haspopup="true" onClick={handleClick}>
            Currencies
          </Button>
          <Menu
            id="menu-currencies"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCurrencyClose}>USD</MenuItem>
            <MenuItem onClick={handleCurrencyClose}>EUR</MenuItem>
            <MenuItem onClick={handleCurrencyClose}>GBP</MenuItem>
            <MenuItem onClick={handleCurrencyClose}>CNY</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;