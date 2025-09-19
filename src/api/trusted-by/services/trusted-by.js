'use strict';

/**
 * trusted-by service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trusted-by.trusted-by');
