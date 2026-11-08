import parse from 'pg-connection-string';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  if (client === 'postgres') {
    const connectionUri = env('DATABASE_URL');
    const config = connectionUri ? parse(connectionUri) : {};

    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host || env('DATABASE_HOST', '127.0.0.1'),
          port: config.port || env.int('DATABASE_PORT', 5432),
          database: config.database || env('DATABASE_NAME', 'strapi'),
          user: config.user || env('DATABASE_USERNAME', 'strapi'),
          password: config.password || env('DATABASE_PASSWORD', ''),
          ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
        },
        pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
      },
    };
  }

  // Fallback to sqlite if needed
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};