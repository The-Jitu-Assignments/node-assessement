CREATE OR ALTER PROCEDURE usp_createOrUpdateProduct(
  @id VARCHAR(50),
  @productName VARCHAR(50),
  @productDescription VARCHAR(250),
  @price INT,
  @imgUrl VARCHAR(250),
  @discountRate INT
)
AS
BEGIN
IF EXISTS (select * from products where id = @id)
  update products set 
  productName = @productName,
  productDescription = @productDescription,
  price = @price,
  imgUrl = @imgUrl,
  discountRate = @discountRate
where id = @id;
ELSE
  insert into products 
    (id, productName, productDescription, price, imgUrl, discountRate)
  values (@id, @productName, @productDescription, @price, @imgUrl, @discountRate)
END;