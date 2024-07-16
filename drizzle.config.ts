/** @type { import("drizzle-kit").Config } */

export default {
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:W8qM4QGEzvtl@ep-still-bush-a5bg1ikp.us-east-2.aws.neon.tech/ContentWizard?sslmode=require",
  },
};
