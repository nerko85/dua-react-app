// import Navigation from './Header/Navigation'
import Head from 'next/head'
import Navigation from './Header/Navigation'
// import Footer from './Footer/Footer'
import './Master.css';
import { Row, Col, Input, Layout } from 'antd';

const Search = Input.Search;
const {Footer} = Layout;
const Master = (props) => ( 
    <div>
        <Head>
            <title>Dua application</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css'/>
        </Head>
        <Navigation/>
        <br/><br/>
        <Row>
            <Col span={18} offset={3}>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </Col>
        </Row>
        <Row gutter={16} type="flex" justify="center">
            {props.children}
        </Row>
        <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
    </div>
)

export default Master;