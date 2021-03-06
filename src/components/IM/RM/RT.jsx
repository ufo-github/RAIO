import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

// modal

import {RCM} from './RCM';
import {RDM} from './RDM';

// ANT
import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown, Select} from 'antd';

const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;



const columns = [
    {
        title: '编码',
        dataIndex: 'encode',
        key: 'Encode',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <RDM
                        title='编码'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源定义!A1 default`}</span>
                    </RDM>
                </span>
            );
        }
    }, 
    {
        title: '分类编码',
        dataIndex: 'cencode',
        key: 'classficationEncode',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <RCM
                        title='分类编码'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源分类!A default`}</span>
                    </RCM>
                </span>
            );
        }
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'Name',
        render: (
            (text) => {
                const clickTest = () => {
                    alert('clickTest!');
                };
                /* <a href="javascript:void(0)" onClick={() => clickTest()}>
                        {text}
                    </a> */
                return(
                    <span>
                        {text}
                    </span>
                );
            }
        )
    },
    {
        title: '描述',
        dataIndex: 'desc',
        key: 'description',
        render: (
            (text) => {
                const clickTest = () => {
                    alert('clickTest!');
                }
                return(
                    <span>
                        {text}
                    </span>
                );
            }
        )
    }
];

// key` prop,or set `rowKey
const datas = [
    {
        encode: `资源定义!A1`,
        cencode: `资源分类!A1`,
        name: `名称`,
        desc: `描述`,
        key: '1'
    },
    {
        encode: `资源定义!A1`,
        cencode: `资源分类!A1`,
        name: `名称`,
        desc: `描述`,
        key: '2'
    },
    {
        encode: `资源定义!A1`,
        cencode: `资源分类!A1`,
        name: `名称`,
        desc: `描述`,
        key: '3'
    },
    {
        encode: `资源定义!A1`,
        cencode: `资源分类!A1`,
        name: `名称`,
        desc: `描述`,
        key: '4'
    }
];


class RT extends Component {
    render () {
        return (
            <div>
                <Table
                    dataSource={datas}
                    columns={columns}
                />
            </div>
        )
    }
}

RT.propTypes = {

};

export {RT};
export default RT;

