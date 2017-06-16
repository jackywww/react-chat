import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
<<<<<<< HEAD
import { Layout, Button, Input, Icon } from 'antd';
=======
import { Layout, Button, Input, Icon, Row, Col } from 'antd';
>>>>>>> d85067eee8df0b19f3dfbec8a33e9599bca18c85
const { Header, Footer, Content } = Layout;

function ClientPage() {
  return (
    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>Content</Content>
			<Footer style={{ position: 'fixed', width: '100%', maxWidth: '680px', height: '50px', bottom: '0', padding: '0' }}>
				<Row gutter={8} style={{ textAlign: 'center', marginTop: '10px' }}>
				  <Col span={17}><Input style={{ width: '95%' }} /></Col>
				  <Col span={4}><Button style={{ width: '95%', height: '28px' }} type="primary">发送</Button></Col>
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
