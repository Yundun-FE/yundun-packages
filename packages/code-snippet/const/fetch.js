const data = await this.Fetch.get('')


try {
  await this.Fetch.post('')
} catch(e) {
  return
}
this.Message('ACTION_SUCCESS')