  
'use strict';

/**
 * LayoutEditor.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
  fetchByModelId(params, source) {
    
    return strapi
      .query(params.model, source)
      .findOne({ modelId: params.id });
  },
};