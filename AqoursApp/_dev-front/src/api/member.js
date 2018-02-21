/**
 * Mocking client-server processing
 */
const _member = [
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' },
  { name: 'Member Name', group: 'develop', age: '25', e_mail: 'furi@ai.ai' }
]

export default {
  getMember (cb) {
    setTimeout(() => cb(_member), 100)
  }
}
