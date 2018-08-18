exports.DATABASE_URL = process.env.DATABASE_URL ||
                      'mongodb://localhost/blog_development';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                      'mongodb://localhost/blog_test';
exports.PORT = process.env.PORT || 8080;