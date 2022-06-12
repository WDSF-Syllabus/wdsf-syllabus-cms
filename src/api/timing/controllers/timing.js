'use strict';

/**
 *  timing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::timing.timing');
