import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Button, Input, Icon } from 'antd';
const { Header, Footer, Content } = Layout;

function ClientPage() {
  return (
    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>Content</Content>
			<Footer style={{ position: 'fixed', width: '100%', maxWidth: '680px', height: '50px', bottom: '0', padding: '0' }}>
		      		<Input style={{ height: '34px', marginTop: '7px', float: 'left', width: '80%' }} />
		      		<Button style={{ float: 'left', height: '34px', marginTop: '7px', marginLeft:'1%' }} type="primary">发送</Button>
		      		<Icon style={{ float: 'left', fontSize: '30px', marginTop: '8px', marginLeft:'1%' }} type="plus-circle-o" />
			</Footer>
		</Layout>
    </div>
  );
}

ClientPage.propTypes = {
};

export default connect()(ClientPage);
