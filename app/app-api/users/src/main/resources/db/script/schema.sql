-- USERS
CREATE TABLE IF NOT EXISTS users
(
    id bigint NOT NULL,
    active boolean DEFAULT true,
    created timestamp without time zone,
    updated timestamp without time zone,
    is_account_non_expired boolean DEFAULT true,
    is_credentials_non_expired boolean DEFAULT true,
    email character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
);



