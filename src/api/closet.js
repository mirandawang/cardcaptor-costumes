/**
 * Mocking client-server processing
 */
import _costumes from './costumes.json'

const TIMEOUT = 100

export default {
  getCostumes: (cb, timeout) => setTimeout(() => cb(_costumes), timeout || TIMEOUT),
  clearFavoriteCostumes: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
