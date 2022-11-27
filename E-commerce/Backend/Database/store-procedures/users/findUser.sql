CREATE OR ALTER PROC findUser(@userEmail VARCHAR(50))
AS 
BEGIN
  SELECT * FROM users WHERE userEmail = @userEmail;
END;