/**
 * Created by sampson on 2017/5/10.
 */
import axios from 'axios'
let options = {}

if (process.env.NODE_ENV === 'production') {
    options.baseURL = 'http://ews.500.com'
} else {
    if (process.VUE_ENV === 'server') { // The server-side needs a full url to works
        options.baseURL = 'http://ews.500.com'
    } else {
        options.baseURL = '/ews'
    }
}
options.baseURL = 'http://ews.500.com'
export default axios.create(options)
