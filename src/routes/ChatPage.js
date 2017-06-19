import React from 'react';
import { connect } from 'dva';
import ChatList from '../components/ChatList';

const ChatPage = ({ dispatch, chatlist }) => {
  function handleChange(send) {
	//console.log(send.target.value)
    dispatch({
      type: 'chatlist/change',
      payload: send,
    });
  }
  function handleSend() {
	dispatch({
      type: 'chatlist/send',
    });
  }
  return (
    <div>
      <ChatList onChange={handleChange} onSend={handleSend} chatlist={chatlist} />
    </div>
  );
};

// export default Products;
export default connect(({ chatlist }) => ({
  chatlist,
}))(ChatPage);