const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sam",
        mongodb_password: "987654321",
        mongodb_clustername: "nextjs-practice",
        mongodb_database: "next-js-blog-udemy-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sam",
      mongodb_password: "987654321",
      mongodb_clustername: "nextjs-practice",
      mongodb_database: "next-js-blog-udemy",
    },
  };
};
