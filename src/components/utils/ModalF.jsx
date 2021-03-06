import React from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    InputNumber,
    Radio,
    Modal
} from 'antd';


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

// TypeError: Cannot read property 'form' of undefined
const modal = (props) => {
    const {getFieldsValue, getFieldValue, setFieldsValue, getFieldDecorator} = this.props.form;
    const item = {
        // 
    };
    return (
        <Modal >
            <Form layout="horizontal">
                <FormItem label="姓名" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('name', {
                        initialValue: item.name,
                        rules: [
                            {
                                required: true,
                                min: 3,
                                max: 12,
                                message: '姓名长度必须介于 3 到 4 个字符之间'
                            }
                        ],
                    })(<Input />)}
                </FormItem>
                <FormItem label="昵称" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('nickName', {
                        initialValue: item.nickName,
                        rules: [
                            {
                                required: true,
                                min: 8,
                                max: 23,
                                message: '姓名长度必须介于 8 到 23 个字符之间'
                            }
                        ],
                    })(<Input />)}
                </FormItem>
                <FormItem label="性别" hasFeedback {...formItemLayout}>
                    {
                        getFieldDecorator('isMale', {
                            initialValue: item.isMale,
                            rules: [
                                {
                                    required: true,
                                    type: 'boolean'
                                }
                            ],
                        })
                        (
                            <Radio.Group>
                                <Radio value>男</Radio>
                                <Radio value={false}>女</Radio>
                            </Radio.Group>
                        )
                    }
                </FormItem>
                <FormItem label="年龄" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('age', {
                        initialValue: item.age,
                        rules: [
                            {
                                required: true,
                                type: 'number',
                                message: '输入的年龄不是纯数字！'
                            }
                        ],
                    })(<InputNumber min={18} max={100} />)}
                </FormItem>
                <FormItem label="手机号码" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('phone', {
                        initialValue: item.phone,
                        rules: [
                            {
                                required: true,
                                pattern: /^1[34578]\d{9}$/,
                                message: '输入的手机号码格式错误！'
                            }
                        ],
                    })(<Input />)}
                </FormItem>
                <FormItem label="电子邮箱" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('email', {
                        initialValue: item.email,
                        rules: [
                            {
                                required: true,
                                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z])+(.[a-zA-Z])+/,
                                message: '输入的邮箱地址格式错误！'
                            }
                        ],
                    })(<Input />)}
                </FormItem>
            </Form>
        </Modal>
    )
};

modal.propTypes = {
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    item: PropTypes.object,
    onOk: PropTypes.func
};

// this.props.form
const NMF = Form.create()(modal);

export default NMF;
