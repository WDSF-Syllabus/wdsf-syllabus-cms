'use strict';

/**
 * timing router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::timing.timing');
