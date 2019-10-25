'use strict';

/**
 * LayoutEditor.js controller
 *
 * @description: A set of functions called "actions" of the `LayoutEditor` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    ctx.send({
      message: 'ok'
    });
  },
  /**
   * Returns an entity of a content type by id
   */
  async findByModelId(ctx) {
    const { source } = ctx.request.query;
    const { modelId } = ctx.params;
    const service = strapi.plugins['layout-editor'].services['layouteditor'];

    const entry = await service.fetchByModelId({ id: modelId, model: 'modellayout'}, source || 'layout-editor');

    // Entry not found
    if (!entry) {
      return ctx.body = {};
    }

    ctx.body = entry;
  },
};
