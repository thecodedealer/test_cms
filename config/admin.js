module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c6003cb96d0f00ce5b227958d96b8b29'),
  },
});
