CREATE DATABASE collection


CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

CREATE TABLE song (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    gender VARCHAR(50) NOT NULL
);



CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    apellido VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
