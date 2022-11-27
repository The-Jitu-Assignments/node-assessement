CREATE OR ALTER PROCEDURE usp_getAllProducts
AS
BEGIN
SELECT * FROM products WHERE productDeleted = 0;
END;