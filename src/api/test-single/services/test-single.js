'use strict';

/**
 * test-single service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-single.test-single');
