import dva from 'dva';
var message = '';
export default {
  namespace: 'clientlist',
  state: {
	  value: '',
	  data: [],
  },
  reducers: {
    'send'(state, { payload: send }) {
    	if(message == ''){
    		return {
    	    	value: '',
    	    	data:[
    	    		...state.data,
    	    	]
        	}
    	}
    	var data = {
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
    	message = ''
    	return data
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