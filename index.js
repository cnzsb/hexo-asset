'use strict';
const filter = require('./lib');

hexo.extend.filter.register('before_post_render', filter);
