CREATE OR ALTER PROCEDURE usp_getUsersToSendEmail
AS
BEGIN
  SELECT 1 FROM users WHERE receivedEmail = 0
END;