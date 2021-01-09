import { Component } from 'react'
import { Form, Input } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Button, Block } from '../../../components'

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty
  } = props

  const success = false

  return (
    <div>
      <div className='auth__top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={errors.email && touched.email}
              hasFeedback
            >
              <Input
                id='email'
                prefix={
                  <MailOutlined
                    className='site-form-item-icon'
                    style={{ color: 'rgba(0, 0, 0, .25)' }}
                  />
                }
                size='large'
                placeholder='E-mail'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <UserOutlined
                    className='site-form-item-icon'
                    style={{ color: 'rgba(0, 0, 0, .25)' }}
                  />
                }
                size='large'
                type='password'
                placeholder='Ваше имя'
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
                placeholder='Пароль'
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
                placeholder='Повторите пароль'
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' size='large'>
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className='auth__register-link' to='/login'>
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className='auth__success-block'>
            <InfoCircleTwoTone style={{ fontSize: '48px' }} />
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  )
}
export default RegisterForm
