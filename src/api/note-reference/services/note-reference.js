'use strict';

/**
 * note-reference service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::note-reference.note-reference');
