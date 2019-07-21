module.exports = {
  name: 'cerebro',
  scope: 'dev',
  server: {
    port: 8080,
  },
  api: {
    external: {
      ccc_service: 'https://dfe-portal.svrs.rs.gov.br/Cte/CccContribuinte',
    },
  },
};
