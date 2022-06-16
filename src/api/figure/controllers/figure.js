'use strict';

/**
 *  figure controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::figure.figure', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::figure.figure').findOne({
      where: { slug: id },
      populate: true,
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));

