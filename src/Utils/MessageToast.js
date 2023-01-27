import { useEffect } from "react";
import { notification } from "antd";

const MessageToast = ({ toast }) => {
  useEffect(() => {
    const { type, title, message } = toast;
    if (message) {
      notification[type]({
        message: title,
        description: message,
      });
    }
  }, [toast]);
  return null;
};

export default MessageToast;
