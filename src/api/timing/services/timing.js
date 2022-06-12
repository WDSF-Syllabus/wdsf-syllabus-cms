'use strict';

/**
 * timing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timing.timing');
