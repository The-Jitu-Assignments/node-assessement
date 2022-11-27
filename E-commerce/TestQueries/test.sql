/* Should be deleted  */
use TutorialDB
GO

-- select * from carBrands;

-- products table

-- CREATE TABLE products(
--   id VARCHAR(50) PRIMARY KEY,
--   productName VARCHAR(50),
--   productDescription VARCHAR(250),
--   price INT,
--   imgUrl VARCHAR(250),
--   discountRate INT,
--   quantity INT DEFAULT 1,
--   productInCart INT DEFAULT 0,
--   productDeleted INT DEFAULT 0
-- );

-- CREATE TABLE users(
--   id VARCHAR(50) PRIMARY KEY,
--   userName VARCHAR(50),
--   userEmail VARCHAR(50),
--   userPassword VARCHAR(50),
--   receivedEmail INT DEFAULT 0
-- );

-- CREATE OR ALTER PROCEDURE usp_signUp(
--   @id VARCHAR(50),
--   @userName VARCHAR(50),
--   @userEmail VARCHAR(50), 
--   @userPassword VARCHAR(50)
-- )
-- AS
-- BEGIN
--   INSERT INTO users (id, userName, userEmail, userPassword)
--   VALUES (@id, @userName, @userEmail, @userPassword);
-- END;

-- select * from users;

-- drop TABLE products

-- fetch all products

-- SELECT * FROM products;

-- CREATE OR ALTER PROCEDURE usp_getAllProducts
-- AS
-- BEGIN
-- SELECT * FROM products WHERE productDeleted = 0;
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

 
-- EXEC usp_getAllProducts;

-- CREATE OR ALTER PROCEDURE usp_createOrUpdateProduct(
--   @id VARCHAR(50),
--   @productName VARCHAR(50),
--   @productDescription VARCHAR(250),
--   @price INT,
--   @imgUrl VARCHAR(250),
--   @discountRate INT,
--   @quantity INT = 1,
--   @productDeleted INT = 0,
--   @productInCart  INT = 0
-- )
-- AS
-- BEGIN
-- IF EXISTS (select * from products where id = @id)
--   update products set 
--   productName = @productName,
--   productDescription = @productDescription,
--   price = @price,
--   imgUrl = @imgUrl,
--   discountRate = @discountRate,
--   quantity = @quantity,
--   productDeleted = @productDeleted,
--   productInCart = @productInCart
-- where id = @id;
-- ELSE
--   insert into products 
--     (id, productName, productDescription, price, imgUrl, discountRate)
--   values (@id, @productName, @productDescription, @price, @imgUrl, @discountRate)
-- END;


-- CREATE OR ALTER PROCEDURE usp_getOneProduct(@id VARCHAR(50))
-- AS
-- BEGIN
-- SELECT * FROM products WHERE id = @id
-- END

-- CREATE OR ALTER PROCEDURE usp_getProductsInCart
-- AS
-- BEGIN
--   SELECT * FROM products WHERE productInCart = 1;
-- END;

-- exec usp_getProductsInCart;