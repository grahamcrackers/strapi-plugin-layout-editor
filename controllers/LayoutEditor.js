'use strict';

/**
 * LayoutEditor.js controller
 *
 * @description: A set of functions called "actions" of the `layout-editor` plugin.
 */

module.exports = {
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
