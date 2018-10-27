CREATE TABLE directors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200)
);

CREATE TABLE MOVIES (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    release_date DATE,
    count_stars INTEGER,
    director_id INTEGER
);

INSERT INTO DIRECTORS (name) VALUES ('Stanley Kubrick'), ('George Lucas');

INSERT INTO MOVIES (title, release_date, count_stars, director_id) VALUES (
    '2001: A Space Odyssey', '05-10-1968', 5, 1
), (
    'Star Wars: Episode IV - A New Hope', '12-27-1977', 4, 2
);