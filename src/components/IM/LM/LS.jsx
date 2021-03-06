import React, { Component } from 'react';
import PropTypes from 'prop-types';

// modal
import {NLDM} from './NLDM';


import {
    Form,
    Icon,
    Input,
    InputNumber,
    Radio,
    Button,
    Modal,
    Cascader,
    Select
} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;


class LSForm extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            show: false
        }
    }
    hideModal = () => {
        this.setState(
            (state, props) => {
                return {
                    show: false
                }
            }
        ); 
    };
    render() {
        const record = this.props.data;
        const {getFieldDecorator, setFieldsValue} = this.props.form;
        // FormItem flexbox
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };
        const showModal = (value) => {
            this.setState(
                (state, props) => {
                    return {
                        show: value
                    }
                }
            ); 
        };
        let show = this.state.show;
        return (
            <div style={{border: '1px solid #ccc'}}>
                <Form 
                    onSubmit={() => alert('submiting...')}
                    layout="inline"
                    >
                    <FormItem
                        label={<span className="left-spaces">类库编码</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('lencode', {
                                rules: [
                                    { required: false, message: '类库编码' }
                                ],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="key" style={{}} />} 
                                    type="text" 
                                    placeholder="类库编码" 
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label={<span className="left-spaces">开发者</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('developers', {
                                rules: [{ required: false, message: '开发者' }],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                                    type="text" 
                                    placeholder="开发者"
                                    />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label={<span className="left-spaces">类库名称</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('libName', {
                                rules: [{ required: false, message: '类库名称' }],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="idcard" style={{}} />} 
                                    type="text" 
                                    placeholder="类库名称" 
                                    />
                            )
                        }
                    </FormItem>
                    <br/>
                    <FormItem>
                        <Button
                            type="primary"
                            icon="search"
                            style={{marginLeft: 30}}
                            >
                            查询
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            icon="user-add"
                            style={{marginLeft: 30}}
                            onClick={
                                () => {
                                    console.log(`this.state.show`, this.state.show);
                                    showModal(true);
                                }
                            }
                            >
                            添加
                        </Button>
                    </FormItem>
                </Form>
                {
                    show
                    &&
                    <NLDM
                        title='标题'
                        data={{}}
                        clickOK={() => console.log(`clicked OK!`)}
                        hide={this.hideModal}
                    >
                        {/* <span>添加</span> */}
                    </NLDM>
                }
            </div>
        );
    }
}

LSForm.propTypes = {

};

const LS = Form.create({})(LSForm);


export {LS};
export default LS;

