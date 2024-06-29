CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    fullname TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users ( id, fullname, cpf, username, password, role, email) VALUES(
"b6add5bb-a696-4012-93d0-1ef43828239e",
"Osvaldo Vicente Raimundo Moura",
"133.635.628-61",
"@osvaldo-moura",
"Abcde1234*",
"INSTRUCTOR",
"osvaldo.vicente.moura@naressi.com.br"
),(
"8e677639-da2a-4694-a0d8-000b5f83973b",
 "Malu Camila Stefany Moreira",
 "749.752.988-99",
 "@malu-moreira",
 "ABcd1234*",
 "ESTUDANTE",
 "malucamilamoreira@lins.net.br"
),(
    "286aab21-ce3e-4ca4-8fd1-d66253aa0da6",
    "Emilly Carla Isabelly Assis",
    "869.140.178-83",
    "@emilly-assis",
    "LILLy139&",
    "ADMINISTRADOR",
    "emilly.carla.assis@scalioni.com.br"
);

SELECT * FROM users;