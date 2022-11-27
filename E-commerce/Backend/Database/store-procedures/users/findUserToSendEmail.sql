CREATE OR ALTER PROCEDURE usp_getUsersToSendEmail
AS
BEGIN
  SELECT * FROM users WHERE receivedEmail = 0
END;