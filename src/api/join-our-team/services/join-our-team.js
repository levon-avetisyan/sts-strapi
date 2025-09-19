'use strict';

/**
 * join-our-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-our-team.join-our-team');
