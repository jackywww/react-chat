import React, {propTypes} from 'react';
import { Layout, Button, Input, Icon, Row, Col, Avatar } from 'antd';
const { Header, Footer, Content } = Layout;
import styles from '../routes/IndexPage.less';

const ChatList = ({ onChange, onSend, chatlist }) => {
	console.log(chatlist)
	return (
	    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
			<Layout>
				<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>	
				{
					chatlist.data.map((item) => {
						let right = (
							<Row className={ styles.margin }>
								<Col span={4}></Col>
								<Col span={16}><div className="send right">{ item.send }</div></Col>
								<Col span={4} className={ styles.center }><Avatar src={item.avatar} size="large" shape="square" icon="user" /></Col>
							</Row>
						)
						let left = (
							<Row className={ styles.margin }>
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
				</Content>
				<Footer style={{ position: 'fixed', width: '100%', maxWidth: '680px', height: '50px', bottom: '0', padding: '0' }}>
					<Row gutter={8} style={{ textAlign: 'center', marginTop: '10px' }}>
					  <Col span={17}><Input value={chatlist.value} onChange={onChange} style={{ width: '95%' }} /></Col>
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