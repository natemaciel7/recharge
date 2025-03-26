CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

--  Clientes
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  document VARCHAR(14) NOT NULL UNIQUE
);

-- Telefones
CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(11) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  carrier_id INT NOT NULL REFERENCES carriers(id),
  client_id INT NOT NULL REFERENCES clients(id)
);

-- Recargas
CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  value NUMERIC(10, 2) NOT NULL CHECK (value >= 10 AND value <= 1000),
  phone_id INT NOT NULL REFERENCES phones(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
