import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Input, Icon } from 'antd';
const { Header, Footer, Content } = Layout;

function ClientPage() {
  return (
    <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '100%', maxWidth: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>Content</Content>
			<Footer style={{ position: 'fixed', width: '100%', maxWidth: '680px', height: '50px', bottom: '0', padding: '0' }}>
		      <Input style={{ height: '34px', marginTop: '7px', float: 'left', width: '80%' }} />
			</Footer>
		</Layout>
    </div>
  );
}

ClientPage.propTypes = {
};

export default connect()(ClientPage);
