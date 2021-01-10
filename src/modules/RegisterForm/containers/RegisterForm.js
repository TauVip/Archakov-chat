import { withFormik } from 'formik'
import RegisterForm from '../components/RegisterForm'
import validate from '../../../utils/validate'

export default withFormik({
  validate: values => {
    let errors = {}

    const keys = Object.keys(values)
    keys.forEach(key => validate[key] && validate[key](errors, values))

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/.test(values.password)
    ) {
      errors.password = 'Слишком легкий пароль'
    }

    return errors
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'RegisterForm'
})(RegisterForm)
