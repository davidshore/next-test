// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../../lib/db";

export default function handler(req, res) {
  const sql = {
    query: "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    values: ["David", "hej", "david@chas.com"],
  };

  excuteQuery(sql);

  res.status(200);
}
