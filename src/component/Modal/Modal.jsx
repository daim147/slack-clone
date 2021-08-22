import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReactDOM from "react-dom";

export default function FormDialog({
  handleForm,
  openModal,
  addChanel,
  closeModal,
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <Dialog
          open={openModal}
          onClose={closeModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Channel Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add channel to this website, please enter your channel name
              here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onChange={handleForm}
              label="Channel Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button onClick={addChanel} variant="contained" color="primary">
              Add Channel
            </Button>
          </DialogActions>
        </Dialog>,
        document.getElementById("modal")
      )}
    </>
  );
}
