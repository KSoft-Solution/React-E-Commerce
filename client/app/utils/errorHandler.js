import { error } from "react-notification-system-redux";

const handleError = (error, dispatch, title = "") => {
  const unsuccessfulOptions = {
    title: `${title}`,
    message: ``,
    position: "tr",
    autoDismiss: 1,
  };
};

export default handleError;
