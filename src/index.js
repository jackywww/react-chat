import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
   initialState: {
     chatlist:{ 
    	 data: [
	       { send: 'dva', dir: 'left', avatar: '' },
	       { send: 'antd', dir: 'right', avatar: '' },
	     ],
     }
   },
 });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/chatlist'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
