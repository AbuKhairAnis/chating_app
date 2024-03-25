import { useEffect, useState } from "react";
import useConversion from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversion } = useConversion();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/message/${selectedConversion._id}`);

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversion?._id) getMessage();
  }, [selectedConversion._id, setMessages]);
  return { messages, loading };
};

export default useGetMessage;
