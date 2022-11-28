import * as yup from 'yup';

export const validateProductSchema = (product) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    imageUrl: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    discountRate: yup.number().required()
  })
  return schema.validate(product);
} 