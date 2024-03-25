import useGetMessage from "../../hooks/useGetMessage";
import Message from "./Message";
import MessageSkeleton from "./../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessage();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send A Message to Start the Conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
