'use strict';

// fix provided here https://github.com/strapi/strapi/issues/4224#issuecomment-540668028
module.exports = {
  findOne(ctx) {
    ctx.body = {};
  },
  find(ctx) {
    ctx.body = [];
  },
};
