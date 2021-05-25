CREATE TABLE "artist" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"birthdate" DATE
);

CREATE TABLE "song" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(80) NOT NULL,
	"length" VARCHAR(10) NOT NULL,
	"released" DATE
);

INSERT INTO "artists" ("name", "birthdate")
VALUES ('Ella Fitzgerald', '04-25-1917');
INSERT INTO "artists" ("name", "birthdate")
VALUES ('Dave Brubeck', '12-06-1920');
INSERT INTO "artists" ("name", "birthdate")
VALUES ('Miles Davis', '05-26-1926');
INSERT INTO "artists" ("name", "birthdate")
VALUES ('Esperanza Spalding', '10-18-1984');

INSERT INTO "songs" ("title", "length", "released")
VALUES ('Take Five', '5:24', '1959-09-29');
INSERT INTO "songs" ("title", "length", "released")
VALUES ('So What', '9:22', '1959-08-17');
INSERT INTO "songs" ("title", "length", "released")
VALUES ('Black Gold', '5:17', '2012-02-01');