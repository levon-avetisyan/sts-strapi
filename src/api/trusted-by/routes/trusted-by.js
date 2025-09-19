'use strict';

/**
 * trusted-by router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trusted-by.trusted-by');
