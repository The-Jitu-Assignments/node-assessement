CREATE OR ALTER PROCEDURE usp_signUp(
  @userName VARCHAR(50),
  @userEmail VARCHAR(50), 
  @userPassword VARCHAR(50)
)
AS
BEGIN
  INSERT INTO users (userName, userEmail, userPassword)
  VALUES (@userName, @userEmail, @userPassword);
END;