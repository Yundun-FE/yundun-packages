import Form from './Form'
import FormRadio from './FormRadio'
import FormRadioButton from './FormRadioButton'
import FormSelect from './FormSelect'
import FormCheckbox from './FormCheckbox'
import FormSearch from './FormSearch'

Form.install = Vue => {
  // Vue.component(Form.name, Form)
  Vue.component(FormRadio.name, FormRadio)
  Vue.component(FormRadioButton.name, FormRadioButton)
  Vue.component(FormSelect.name, FormSelect)
  Vue.component(FormCheckbox.name, FormCheckbox)
  Vue.component(FormSearch.name, FormSearch)
}

export default Form
