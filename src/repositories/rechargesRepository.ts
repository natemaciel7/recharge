import connection from "../database/connection";
import { Recharge } from "../protocols/recharge";

export async function createRecharge(data: Omit<Recharge, "id" | "createdAt">) {
  const result = await connection.query<Recharge>(
    `
    INSERT INTO recharges (value, phone_id)
    VALUES ($1, $2)
    RETURNING *
    `,
    [data.value, data.phoneId]
  );
  return result.rows[0];
}
export async function findRechargesByPhoneId(phoneId: number) {
  const result = await connection.query<Recharge>(
    "SELECT * FROM recharges WHERE phone_id = $1 ORDER BY created_at DESC",
    [phoneId]
  );
  return result.rows;
}
