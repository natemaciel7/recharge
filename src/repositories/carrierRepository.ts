import connection from "../database/connection";
import { Carrier } from "../protocols/carrier";

export async function findCarrierById(id: number) {
  const result = await connection.query<Carrier>(
    "SELECT * FROM carriers WHERE id = $1",
    [id]
  );
  return result.rows[0];
}
