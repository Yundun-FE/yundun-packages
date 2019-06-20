<template>
  <yd-card
    horizontal
    title="防DDoS"
  >
    <template slot="tips">
      <p>已默认开启轻量级抗 DDoS 服务，如遇针对性大规模 DDoS 攻击，{{ appInfo.companyEN }} 会将域名解析回源停止服务，如需更高级抗 DDoS 服务，请开启 <a href="/console/cloud-wall">高防 IP 服务</a></p>
    </template>
  </yd-card>
</template>

<script>
import create from '@/utils/create-basic'

export default create({
  name: 'CardDDos'
})
</script>
