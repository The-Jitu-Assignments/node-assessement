CREATE OR ALTER PROCEDURE usp_getProductsInCart
AS
BEGIN
  SELECT * FROM products WHERE productInCart = 1;
END;