import { join } from 'path';

export default {
  appType: 'h5',
  plugins: [
    join(__dirname, '..', require('../package').main || 'index.js'),
  ],
}
