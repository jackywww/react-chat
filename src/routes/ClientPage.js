import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input, Icon, Row, Col, Avatar } from 'antd';
const { Header, Footer, Content } = Layout;
import styles from './IndexPage.less';
var data = [
	{
		message: 'aaabbbaa',
		avatar: '',
		dir: 'left',
	},
	{
		message: 'aacccaaa',
		avatar: '',
		dir: 'right',
	},	
]
data.push({
	message: 'aaabbbaa',
	dir: 'left',	
})
function ClientPage() {
  return (
    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>	
			{
				data.map((item) => {
					let right = (
						<Row className={ styles.margin }>
							<Col span={4}></Col>
							<Col span={16}><div className="send right">{ item.message }</div></Col>
							<Col span={4} className={ styles.center }><Avatar src={item.avatar} size="large" shape="square" icon="user" /></Col>
						</Row>
					)
					let left = (
						<Row className={ styles.margin }>
							<Col span={4} className={ styles.center }><Avatar src={item.avatar} shape="square" size="large" icon="user" /></Col>
							<Col span={16}><div className="send left">{ item.message }</div></Col>
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
				  <Col span={17}><Input style={{ width: '95%' }} /></Col>
				  <Col span={4}><Button style={{ width: '95%', height: '28px', padding: '0' }} type="primary">发送</Button></Col>
				  <Col span={3}><Icon style={{ fontSize: '26px' }} type="plus-circle-o" /></Col>
				</Row>  		
			</Footer>
		</Layout>
    </div>
  );
}

ClientPage.propTypes = {
};

export default connect()(ClientPage);
