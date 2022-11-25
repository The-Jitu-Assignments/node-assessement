/* Should be deleted  */
use TutorialDB
GO

-- select * from carBrands;

-- products table
-- CREATE TABLE products(
--   id INT IDENTITY PRIMARY KEY,
--   productName VARCHAR(50),
--   productDescription VARCHAR(250),
--   price INT,
--   imgUrl VARCHAR(250),
--   discountRate INT,
--   productDeleted INT DEFAULT 0
-- );

-- drop TABLE products

-- fetch all products

-- SELECT * FROM products;

-- CREATE OR ALTER PROCEDURE usp_getAllProducts
-- AS
-- BEGIN
-- SELECT * FROM products;
-- END;

-- CREATE OR ALTER PROCEDURE usp_createProduct(
--   @productName VARCHAR(50),
--   @productDescription VARCHAR(250),
--   @price INT,
--   @imgUrl VARCHAR(250),
--   @discountRate INT
-- )
-- AS
-- BEGIN
-- INSERT INTO products VALUES(@productName, @productDescription, @price, @imgUrl, @discountRate)
-- END

-- CREATE OR ALTER PROCEDURE usp_getOneProduct(@id INT)
-- AS
-- BEGIN
-- SELECT * FROM products WHERE id = @id
-- END
 
-- EXEC usp_getAllProducts;
