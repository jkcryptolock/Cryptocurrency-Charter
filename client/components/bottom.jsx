import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const TimeSelector = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const selectTime = (start, end) => {
      props.changeTimeframe(start, end);
  }

  return (
      <div className="body">
        <div id="bottom-container">
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Last 30 Days" onClick={() => selectTime('', '')}icon={<RestoreIcon />} />
            <BottomNavigationAction label="2019" onClick={() => selectTime('2019-01-01', '2019-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2018" onClick={() => selectTime('2018-01-01', '2018-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2017" onClick={() => selectTime('2017-01-01', '2017-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2016" onClick={() => selectTime('2016-01-01', '2016-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2015" onClick={() => selectTime('2015-01-01', '2015-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2014" onClick={() => selectTime('2014-01-01', '2014-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2013" onClick={() => selectTime('2013-01-01', '2013-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2012" onClick={() => selectTime('2012-01-01', '2012-12-31')} icon={<RestoreIcon />} />
            <BottomNavigationAction label="2011" onClick={() => selectTime('2011-01-01', '2011-12-31')} icon={<RestoreIcon />} />
            </BottomNavigation>
        </div>
      </div>
  );
}

export default TimeSelector;