import * as yup from 'yup';

export const validateProductSchema = (product) => {
  const schema = yup.object().shape({
    discountRate: yup.number().required(),
    price: yup.number().required(),
    productDescription: yup.string().required(),
    imgUrl: yup.string().required(),
    productName: yup.string().required(),
  })
  return schema.validate(product);
};

export const validateSignUpSchema = (user) =>  {
  const schema = yup.object().shape({
    userName: yup.string().required(),
    userEmail: yup.string().email().required(),
    userPassword: yup.string().required(),
  });
  return schema.validate(user)
}