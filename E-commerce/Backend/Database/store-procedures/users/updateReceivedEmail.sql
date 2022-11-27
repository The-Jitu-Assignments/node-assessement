CREATE OR ALTER PROCEDURE usp_updateReceivedEmail(@id VARCHAR(50))
AS
BEGIN
  UPDATE users SET receivedEmail = 1 WHERE id = @id;
END;