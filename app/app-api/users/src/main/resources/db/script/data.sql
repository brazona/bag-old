--liquibase formatted sql
--changeset dirk:2
INSERT INTO users(id, active, created, is_account_non_expired, is_credentials_non_expired, email, password, name)
VALUES (1, true, '2023/07/18', true, true,'cezar@gmail.com', '$2a$10$0aFkQ9xFY.tLmmnymiY0puLAGFkin3n0MDMfqJWJ//XaskkpLmOF.', '${sql_user_name_1}');
INSERT INTO users(id, active, created, is_account_non_expired, is_credentials_non_expired, email, password, name)
VALUES (2, true, '2023/07/18', true, true,'jadina@gmail.com', '$2a$10$0aFkQ9xFY.tLmmnymiY0puLAGFkin3n0MDMfqJWJ//XaskkpLmOF.', '${sql_user_name_2}');
