import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import styles from './changePassword.less';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.$msg.loading('正在注册...', 2, () => {
          this.$msg.success('注册成功');
          setTimeout(() => {
            this.props.history.push('/login');
          }, 500);
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPassword')) {
      callback('您输入的两次密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  toLogin = e => {
    e.preventDefault();
    this.props.history.push('/login');
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <div className={styles.changePasWord_wrapper}>
        <h2 className={`add_h2 ${styles.h2}`}>更新密码</h2>
        <Divider />
        <Form onSubmit={this.handleSubmit} className={styles['ant-form']}>
          <FormItem {...formItemLayout} label="旧密码">
            {getFieldDecorator('oldPassword', {
              rules: [
                {
                  required: true,
                  message: '请输入旧密码!'
                }
              ]
            })(<Input className={styles['ant-input']} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="新密码">
            {getFieldDecorator('newPassword', {
              rules: [
                {
                  required: true,
                  message: '请输入您要设置的新密码!'
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" className={styles['ant-input']} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="验证新密码">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请再次确认您要设置的新密码!'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input
                type="password"
                onBlur={this.handleConfirmBlur}
                className={styles['ant-input']}
              />
            )}
          </FormItem>
          <FormItem
            {...tailFormItemLayout}
            className={styles['form-text-right']}
          >
            <Button type="primary" htmlType="submit">
              更新密码
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(RegistrationForm);
