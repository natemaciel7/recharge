import connection from "../database/connection";
import { Client } from "../protocols/client";
import { Phone } from "../protocols/phone";

export async function findClientByDocument(document: string) {
  const result = await connection.query<Client>(
    "SELECT * FROM clients WHERE document = $1",
    [document]
  );
  return result.rows[0];
}

export async function createClient(data: Omit<Client, "id">) {
  const result = await connection.query<Client>(
    "INSERT INTO clients (name, document) VALUES ($1, $2) RETURNING *",
    [data.name, data.document]
  );
  return result.rows[0];
}

export async function findPhonesByClientId(clientId: number) {
  const result = await connection.query<Phone>(
    "SELECT * FROM phones WHERE client_id = $1",
    [clientId]
  );
  return result.rows;
}

export async function findPhoneByNumber(number: string) {
  const result = await connection.query<Phone>(
    "SELECT * FROM phones WHERE number = $1",
    [number]
  );
  return result.rows[0];
}

export async function findPhoneById(id: number) {
  const result = await connection.query("SELECT * FROM phones WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
}

export async function createPhone(data: Omit<Phone, "id">) {
  const result = await connection.query<Phone>(
    `
    INSERT INTO phones (number, description, carrier_id, client_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [data.number, data.description, data.carrierId, data.clientId]
  );
  return result.rows[0];
}
