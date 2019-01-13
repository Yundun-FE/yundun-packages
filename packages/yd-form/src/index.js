// import Form from './components/Form'
import FormRadio from './components/FormRadio'
import FormRadioButton from './components/FormRadioButton'
import FormSelect from './components/FormSelect'
import FormCheckbox from './components/FormCheckbox'

FormSelect.install = Vue => {
  Vue.component(FormSelect.name, FormSelect)
  Vue.component(FormRadio.name, FormRadio)
  Vue.component(FormRadioButton.name, FormRadioButton)
  Vue.component(FormCheckbox.name, FormCheckbox)
}

export default FormSelect
