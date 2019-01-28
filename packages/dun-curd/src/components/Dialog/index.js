import Dialog from './Dialog'
import DialogForm from './DialogForm'

Dialog.install = Vue => {
  Vue.component(Dialog.name, Dialog)
  Vue.component(DialogForm.name, DialogForm)
}

export default DialogForm
