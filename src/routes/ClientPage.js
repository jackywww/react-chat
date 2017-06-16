import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input, Icon, Row, Col, Popover } from 'antd';
const { Header, Footer, Content } = Layout;
import styles from './IndexPage.less';
const content = (
		  <div>
		    <p>Contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
		  </div>
		);
function ClientPage() {
  return (
    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>	
				<div className="chatpop left">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
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
