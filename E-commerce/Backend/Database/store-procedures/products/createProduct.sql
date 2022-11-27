CREATE OR ALTER PROCEDURE usp_createProduct(
  @productName VARCHAR(50),
  @productDescription VARCHAR(250),
  @price INT,
  @imgUrl VARCHAR(250),
  @discountRate INT
)
AS
BEGIN
INSERT INTO products VALUES(@productName, @productDescription, @price, @imgUrl, @discountRate)
END