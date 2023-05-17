
CREATE TABLE users (
    id_user int (11) NOT NULL auto_increment,
    name VARCHAR (250) NOT NULL,
    telephone int (20) NOT NULL,
    email VARCHAR (250) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY(id_user)
);
