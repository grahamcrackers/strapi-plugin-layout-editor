'use strict';

/**
 * ModelLayout.js controller
 */

module.exports = {
  // fix for qraphql provided here https://github.com/strapi/strapi/issues/4224#issuecomment-540668028
  findOne(ctx) {
    ctx.body = {};
  },
  find(ctx) {
    ctx.body = [];
  },
  /**
   * Returns an entity of a content type by id
   */
  async findByModelId(ctx) {
    const { source } = ctx.request.query;
    const { id } = ctx.params;
    const service = strapi.plugins['layout-editor'].services['layouteditor'];

    const entry = await service.fetchByModelId({ id, model: 'modellayout'}, source);

    // Entry not found
    if (!entry) {
      return ctx.notFound('Entry not found');
    }

    ctx.body = entry;
  },

};
