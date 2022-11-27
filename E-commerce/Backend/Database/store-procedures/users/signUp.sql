CREATE OR ALTER PROCEDURE usp_signUp(
  @id VARCHAR(50),
  @userName VARCHAR(50),
  @userEmail VARCHAR(50), 
  @userPassword VARCHAR(50)
)
AS
BEGIN
  INSERT INTO users (id, userName, userEmail, userPassword)
  VALUES (@id, @userName, @userEmail, @userPassword);
END;