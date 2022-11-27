CREATE TABLE users(
  id VARCHAR(50) PRIMARY KEY,
  userName VARCHAR(50),
  userEmail VARCHAR(50),
  userPassword VARCHAR(255),
  receivedEmail INT DEFAULT 0
);