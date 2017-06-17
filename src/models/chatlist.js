import dva from 'dva';
var message = '';
export default {
  namespace: 'chatlist',
  state: {
	  value: '',
  },
  value: '',
  reducers: {
    'send'(state, { payload: send }) {
    	if(message == ''){
    		return [...state]
    	}
    	return {
	    	value: '',
	    	data:[
	    		...state.data,
	    		{
					send: message,
					dir: 'right',
					avatar: ''
	    		}
	    	]
    	}
    },
    'change'(state, { payload: send }) {
	    message = send.target.value
	    return {
	    	data: [...state.data],
	    	value:message 
	    }
	 },
  },
};