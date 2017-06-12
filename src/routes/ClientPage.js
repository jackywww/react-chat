import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Input } from 'antd';
const { Header, Footer, Content } = Layout;
const Search = Input.Search;
console.log(Input)
function ClientPage() {
  return (
    <div style={{ width: '680px', margin: '0 auto' }}>
		<Layout>
			<Content style={{ position: 'fixed', width: '680px', top: '0', bottom: '50px', background: '#eaeaea' }}>Content</Content>
			<Footer style={{ position: 'fixed', width: '680px', height: '50px', bottom: '0', padding: '0' }}>
			<Search
				placeholder="input search text"
				style={{ width: '100%' }}
				onSearch={value => console.log(value)}
			/>
			</Footer>
		</Layout>
    </div>
  );
}

ClientPage.propTypes = {
};

export default connect()(ClientPage);
