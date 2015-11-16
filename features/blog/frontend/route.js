'use strict';

/**
 * Map final part of URL to equivalent functions in controller
 */
module.exports = function (component) {
    let controller = component.controllers.frontend;

    return {
        "/blog": {
            get: {
                handler: controller.allPosts
            }
        },
        '/blog/page-:page([0-9]+)?(/)?': {
            get: {
                handler: controller.allPosts
            }
        },
        "/blog/:postId([0-9]+)/:postTitle": {
            get: {
                handler: controller.postDetail
            }
        }
    }
};