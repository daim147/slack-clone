import { Snackbar, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import { database } from "../../firebase";
import FormDialog from "../Modal/Modal";

import { Option, OptionChannel } from "./Sidebar.styles";
import { useHistory } from "react-router-dom";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = React.useState("");
  const [popper, setPopper] = React.useState(false);
  const history = useHistory();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleForm = (e) => {
    setName(e.target.value);
  };
  const addChanelName = () => {
    if (name.trim() === "") {
      setOpenModal(false);
      alert("INVALID NAME");
      return;
    }
    database
      .collection("rooms")
      .add({
        name,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setName("");
        setOpenModal(false);
        setPopper(true);
        setTimeout(() => setPopper(false), 3000);
      });
  };

  const openModalForName = () => {
    setOpenModal(true);
  };
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  return (
    <>
      <Option
        onClick={addChannelOption ? openModalForName : selectChannel}
        display="flex"
        alignItems="center"
      >
        {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
        {Icon ? (
          <Typography variant="h3">{title}</Typography>
        ) : (
          <OptionChannel>
            <span>#</span>
            <Typography variant="h3">{title}</Typography>
          </OptionChannel>
        )}
      </Option>
      {addChannelOption && (
        <FormDialog
          handleForm={handleForm}
          addChanel={addChanelName}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
      {addChannelOption &&
        ReactDOM.createPortal(
          <Snackbar open={popper} autoHideDuration={6000}>
            <Alert severity="success">
              Your Channel is added successfully!
            </Alert>
          </Snackbar>,
          document.getElementById("modal")
        )}
    </>
  );
};

export default SidebarOption;
