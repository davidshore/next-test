// db.js
import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "aws.connect.psdb.cloud",
    database: "test",
    user: "qi83ubjmb9qeutj4i30a",
    password: "pscale_pw_90a13ltNIaxREHhtGCccp0osL6oJPPcBXBiCPF6aNXi",
  },
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
