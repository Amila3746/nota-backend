export default ({ env }: { env: any }) => {
  const connectionString = env('DATABASE_URL');

  return {
    connection: {
      client: 'postgres',
      connection: connectionString
        ? {
            connectionString,
            ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
          }
        : {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi'),
            username: env('DATABASE_USERNAME', 'strapi'),
            password: env('DATABASE_PASSWORD', ''),
            ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
          },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
  };
};