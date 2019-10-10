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
};
