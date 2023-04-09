CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(20),
    username VARCHAR(20) UNIQUE
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(70),
    zip_code INTEGER CHECK (zip_code >= 10000000 AND zip_code <= 99999999),
    cost INTEGER CHECK (cost <= 9999999),
    done BOOLEAN,
    deadline TIMESTAMP WITH TIME ZONE,
    username VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (username) REFERENCES users (username)
);
