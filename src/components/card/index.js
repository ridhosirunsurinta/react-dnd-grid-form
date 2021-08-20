import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Card = (props) => {
  const { classes, animal, handleInputChange } = props;

  return (
    <div className={classes.card}>
      <img
        className={classes.cardImage}
        src={animal.url}
        alt={animal.caption}
      />

      <form className={classes.form}>
        <TextField
          name="caption"
          value={animal.caption}
          onChange={() => handleInputChange()}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(Card);
