module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql-42579-0.cloudclusters.net'),
        port: env.int('DATABASE_PORT', 17401),
        database: env('DATABASE_NAME', 'abdo'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', '80ww4PNS'),
      },
      options: {},
    },
  },
});

