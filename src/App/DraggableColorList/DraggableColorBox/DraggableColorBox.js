import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import styles from "./DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(({ classes, name, deleteColorBox }) => {
  return (
    <div className={classes.root} >
      <div className={classes.boxContent}>
        <span>
          {name}
        </span>
        <DeleteIcon 
          className={classes.deleteIcon} 
          onClick={deleteColorBox}
        />
      </div>
    </div>
  )
});

export default withStyles(styles)(DraggableColorBox);
