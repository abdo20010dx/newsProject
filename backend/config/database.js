module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb+srv://tester:test@cluster0.cmpu2.mongodb.net/strapi?retryWrites=true&w=majority',
      },
      options: {
        ssl: true,
      },
    },
  },
});