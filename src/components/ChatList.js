import React, {propTypes} from 'react';
import { Layout, Button, Input, Icon, Row, Col, Avatar } from 'antd';
const { Header, Footer, Content } = Layout;
import styles from '../routes/IndexPage.less';

const ChatList = ({ onChange, onSend, chatlist }) => {

	const scroll = (e) => {
		if(e){
			e.scrollTop = e.scrollHeight
		}
	}
	
	return (
	    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
			<Layout>
				<Content className="chat chatcontent">	
					<div ref={scroll} className="chat chatlist">
					{
						chatlist.data.map((item,index) => {
							let right = (
								<Row key={+new Date() + index} className={ styles.margin }>
									<Col span={4}></Col>
									<Col span={16}><div className="send right">{ item.send }</div></Col>
									<Col span={4} className={ styles.center }><Avatar src={item.avatar} size="large" shape="square" icon="user" /></Col>
								</Row>
							)
							let left = (
								<Row key={+new Date() + index} className={ styles.margin }>
									<Col span={4} className={ styles.center }><Avatar src={item.avatar} shape="square" size="large" icon="user" /></Col>
									<Col span={16}><div className="send left">{ item.send }</div></Col>
									<Col span={4}></Col>
								</Row>
							)
							if(item.dir == 'left'){
								return left
							}else{
								return right
							}
							
						})
					}
					</div>
				</Content>
				<Footer style={{ position: 'fixed', width: '100%', maxWidth: '680px', height: '50px', bottom: '0', padding: '0' }}>
					<Row gutter={8} style={{ textAlign: 'center', marginTop: '10px' }}>
					  <Col span={17}><Input onPressEnter={onSend} value={chatlist.value} onChange={onChange} style={{ width: '95%' }} /></Col>
					  <Col span={4}><Button style={{ width: '95%', height: '28px', padding: '0' }} type="primary" onClick={onSend}>发送</Button></Col>
					  <Col span={3}><Icon style={{ fontSize: '26px' }} type="plus-circle-o" /></Col>
					</Row>  		
				</Footer>
			</Layout>
	    </div>
	  );
};

ChatList.propTypes = {
};
export default ChatList;