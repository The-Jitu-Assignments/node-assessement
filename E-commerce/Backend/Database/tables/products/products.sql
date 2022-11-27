CREATE TABLE products(
  id VARCHAR(50) PRIMARY KEY,
  productName VARCHAR(50),
  productDescription VARCHAR(250),
  price INT,
  imgUrl VARCHAR(250),
  discountRate INT,
  quantity INT DEFAULT 1,
  productInCart INT DEFAULT 0,
  productDeleted INT DEFAULT 0
);