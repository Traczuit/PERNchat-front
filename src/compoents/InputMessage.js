import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const InputMessage = () => {
  const [messageContent, setMessageContent] = useState("");

  return (
    <form id="new-message">
      <TextField
        id="type-your-msg"
        label="Type your message..."
        multiline
        maxRows={4}
        value={messageContent}
        onChange={e=>setMessageContent(e.target.value)}
      />
      <Button id="submit" color="secondary">
        Send
      </Button>
    </form>
  );
};

export default InputMessage;
