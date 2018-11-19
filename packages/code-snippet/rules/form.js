import { validator, validatorList } from 'common/utils/validator'
import RULE from 'common/utils/verify'


export default create({
  data() {
    return {
      formRules: {
        jump_url: [
          { required: true, message: '请输入', trigger: 'blur' },
          { validator: validator(RULE.defaultUrl) }
        ]
      }
    }
  }
})