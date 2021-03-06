import React, {Component} from 'react';

import {IndexComponents} from './IndexComponents';

import {AL} from '../Ant_Components/FixedSider';

import {WHLF} from './utils/WHLF';

import {AT} from './utils/AT';

import 'whatwg-fetch';
// import * as fetch from 'whatwg-fetch';



import styles from './Item1.css';
// css in js


// fetch
import {fetchSearch} from './Fetch';



import {Layout, Menu, Icon, Spin , Alert} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

/* let datas = [
    {
        key: '1',
        uname: 'xray',
        utype: "内部用户",
        uid: 17,
        lname: '西湖区',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }, 
    {
        key: '2',
        uname: 'Sidney',
        utype: "外部用户",
        uid: 23,
        lname: '湖底公园',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "否"
    },
    {
        key: '3',
        uname: 'Joe Black',
        utype: "内部用户",
        uid: 32,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    },
    {
        key: '4',
        uname: 'xray',
        utype: "外部用户",
        uid: 23,
        lname: '西湖公园1号',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }, 
    {
        key: '5',
        uname: 'Sidney',
        utype: "内部用户",
        uid: 66,
        lname: '西湖湖底',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "否"
    },
    {
        key: '6',
        uname: 'Joe Black',
        utype: "外部用户",
        uid: 18,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }
]; */



class Item1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            showloading: false
        };
    }
/*     componentDidMount() {
        setTimeout(() => {
                fetch('https://cdn.xgqfrms.xyz/json/roles.json')
            .then((res) => {
                console.log(`res `, res);
                let json = res.json();
                console.log(`json `, json);
                return json;
            })
            .then((data) => {
                this.setState(
                    {
                        datas: data
                    }
                );
            });
        }, 1000);
    }; */
    onSearch = (values) => {
        // get search content value
        const color_css = `
            color: #f0f;
            font-size: 23px;
        `;
        console.log(`%c get search values = \n`, color_css, values);
        this.setState(
            {
                showloading: true
            }
        );
        // let data = fetchSearch.getAll();
        let data = [];
        /* fetchSearch.getAll().then(
            (json) => {
                data = json;
                return data;
            }
        ); */
        // Object.assign() values
        // {...values} , let objClone = { ...obj}; 用于对象字面量 (new in ECMAScript; stage 3 draft):
        let {uid, uname, lname, utype, email, pnum, vdate, activation} = values;
        // values
        /* console.log(`*******************************************************`);
        console.log(`uid`, uid);
        console.log(`uname`, uname);
        console.log(`utype`, utype);
        console.log(`activation`, activation);
        console.log(`*******************************************************`); */
        // fetch data
        fetchSearch.getUserInfos(uid, uname, lname, utype, email, pnum, vdate, activation).then(
            (json) => {
                data = json;
                return data;
            }
        );
        /* fetchSearch.getUserId(17).then(
            (json) => {
                data = json;
                return data;
            }
        ); */
        // array objects map
        console.log(`data`, data);
        // promise
        setTimeout(() => {
            console.log(`data again`, data);
            this.setState(
                {
                    datas: ((data.length > 0 || data.hasOwnProperty("uid")) ? data : []),
                    showloading: false
                }
            );
        }, 1000);
        /* setTimeout(() => {
            fetch('https://cdn.xgqfrms.xyz/json/roles.json')
            .then((res) => {
                console.log(`res `, res);
                let json = res.json();
                console.log(`json `, json);
                return json;
            })
            .then((data) => {
                this.setState(
                    {
                        datas: data,
                        showloading: false
                    }
                );
            });
        }, 1000); */
        // lodaing ...
    }
    render() {
        return (
            <div>
                <a href="#用户查询">用户查询</a>
                {/* <span className={styles.css_in_js_h1}>
                    CSS in JS Testing
                </span>
                <span className="css-in-js-h1">
                    className Testing
                </span> */}
                {/*<IndexComponents />*/}
                {/*<AL />*/}
                <div className="user-search">
                    <WHLF
                        onSearch={this.onSearch}
                    />
                    {/* form */}
                </div>
                {
                    
                    <Spin tip="Loading..." size="large" spinning={this.state.showloading}>
                        <AT 
                            datas={this.state.datas}
                        /> 
                    </Spin>
                }
            </div>
        );
    }
}

export default Item1;