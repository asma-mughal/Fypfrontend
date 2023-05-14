import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const TagInput = ({categories,setCategories}) => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "fund" },
    { key: 1, label: "investment" },
    { key: 2, label: "needed" },
    { key: 3, label: "organization" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setCategories((chips) =>
      chips.filter((chip) => chip._id !== chipToDelete._id)
    );
  };
  return (
    <Paper component="ul" className={classes.root}>
    {categories?.map((data) => {
      let icon;

      if (data.label === "React") {
        icon = <TagFacesIcon />;
      }

      return (
        <li key={data.key}>
          <Chip
            icon={icon}
            label={data.title}
            onDelete={data.title === "React" ? undefined : handleDelete(data)}
            className={classes.chip}
          />
        </li>
      );
    })}
  </Paper>
  )
}

export default TagInput
