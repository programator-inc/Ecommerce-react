import React from "react";
import { Form, Input, Button, DatePicker, Icon, } from "antd";
import FormItem from "../../../node_modules/antd/lib/form/FormItem";
const formItem = Form.Item;

const provinceOfPakistan = {
    "country": "Pakistan",
    "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"]
};

class SignUpForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                                message: 'Please input your Name!'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={"User name"}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userEmail', {
                            rules: [{
                                required: true,
                                message: 'Please input your email!'
                            }]
                        })(
                            <Input
                                prefix={<span style={{ color: 'rgba(0,0,0,.25)' }}> @</span>}
                                placeholder={"Email"}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userPassword', {
                            rules: [{
                                required: true,
                                message: 'Please input your Password!'
                            }]
                        })(
                            <Input
                                type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={"Password"}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userCity', {
                            rules: [{
                                required: true,
                                message: 'Please input your city name!'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="environment-o" style={{ color: 'rgba(0,0,0,0.25' }} />}
                                placeholder={"City name"}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userAddress', {
                            rules: [{
                                required: true,
                                message: 'Please input your home address'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,0.25' }} />}
                                placeholder={"Home Address"}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userPhn', {
                            rules: [{
                                required: true,
                                message: 'Please input your phone number'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="contacts" style={{ color: 'rgba(0,0,0,0.25' }} />}
                                type="number"
                                min="0"
                                placeholder={"Phone +92..."}
                            />
                        )}
                    </FormItem>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%' }}
                    >
                       Create Account
                    </Button>
                    Or have an account?  <a href="">Login now!</a>
                </Form>

                <div style={{ marginBottom: '3em' }}></div>
            </div >
        )
    }
};

const WrappedRegistrationForm = Form.create()(SignUpForm);
export default WrappedRegistrationForm;


