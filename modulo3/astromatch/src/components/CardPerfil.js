import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Info, InfoCaption, InfoTitle, } from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
  },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '90%',
  },
}));

export const CardPerfil = React.memo(function GalaxyCard(props) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <div id='ocard'>
      
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={props.profiles.photo}
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{props.profiles.name}, {props.profiles.age}</InfoTitle>
            <InfoCaption>{props.profiles.bio}</InfoCaption>
          </Info>
        </Box>
      </Card>
    </div>
  );
});
export default CardPerfil