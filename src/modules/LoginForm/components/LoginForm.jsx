import { Component } from 'react'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Button, Block } from '../../../components'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в аккаунт</p>
        </div>
        <Block>
          <Form>
            <Form.Item validateStatus='success' hasFeedback>
              <Input
                prefix={
                  <UserOutlined
                    className='site-form-item-icon'
                    style={{ color: 'rgba(0, 0, 0, .25)' }}
                  />
                }
                size='large'
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <LockOutlined
                    className='site-form-item-icon'
                    style={{ color: 'rgba(0, 0, 0, .25)' }}
                  />
                }
                size='large'
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' size='large'>
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className='auth__register-link' to='/register'>
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    )
  }
}
export default LoginForm
