import * as React from 'react';
import { Box, BoxProps, Button, ButtonProps, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { substrateGreen } from './theme';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    paddingBottom: theme.spacing(5),
    '&:after': {
      content: "' '",
      position: 'absolute',
      top: 0,
      left: `calc(${theme.breakpoints.values.lg / 2}px - 50vw - ${theme.spacing(5)}px)`,
      height: '100%',
      width: '100vw',
      zIndex: '-1',
      background: theme.palette.background.default,
      [theme.breakpoints.down('md')]: {
        left: theme.spacing(-5),
      },
    },
    '& h1, & h2, & h3, & h4, & h5, & p': {
      maxWidth: '624px'
    },
  },
  heading: {
    marginBottom: theme.spacing(1),
    '& sup': {
      marginRight: theme.spacing(1.2),
    },
  },
  ref: {
    display: 'block',
    width: 'fit-content',
    marginLeft: '-0.5em',
    textDecoration: 'none',
    '&:first-of-type': {
      marginTop: theme.spacing(),
    },
    '& button': {
      textAlign: 'left',
      color: substrateGreen[600],
    },
  }
}));


export const Section: React.FunctionComponent<BoxProps> = ({children, ...props}) => {
  const classes = useStyles();
  return <Box className={classes.section} {...props}>{children}</Box>
};


interface HeadingProps {
  prefix?: string | number;
}
export const SectionHeading: React.FunctionComponent<HeadingProps> = ({children, prefix}) => {
  const classes = useStyles();
  return (
    <Typography variant='h2' className={classes.heading}>
      {prefix && 
        <Typography variant='h4' component='sup'>
          {prefix}
        </Typography>
      }
      {children}
    </Typography>
  );
};


export const SectionText: React.FunctionComponent = ({children}) => (
  <Typography variant='body1'>
    {children}
  </Typography>
);

export const SectionRef: React.FunctionComponent<ButtonProps> = ({
  children,
  href,
  startIcon = <ArrowForwardIcon />,
  ...props
}) => {
  const classes = useStyles();
  return (
    <a target='_blank' href={href} className={classes.ref}>
      <Button 
        color='secondary'
        startIcon={startIcon}
        {...props}
      >
        {children}
      </Button>
    </a>
  )
};
