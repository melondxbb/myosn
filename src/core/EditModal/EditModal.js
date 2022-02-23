import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, Grid } from "@material-ui/core";

const EditModal = (props) => {
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState([]);
  const [text, setText] = useState("");
  console.log(props)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setValues([]);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleValueChange = (index, e) => {
    const updatedValues = values.map((value, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return value;
      }
    });
    setValues(updatedValues);
  };
  const deleteValue = (jump) => {
    setValues(values.filter((j) => j !== jump));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>Sample Text.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={text}
            onChange={handleChangeText}
            label="Text"
            fullWidth
          />
          
          {values.map((jump, index) => (
            <Box key={"jump" + index}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={10}>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Value"
                    value={jump || ""}
                    onChange={(e) => handleValueChange(index, e)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <div
                    className="font-icon-wrapper"
                    onClick={() => deleteValue(jump)}
                  >
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditModal;
