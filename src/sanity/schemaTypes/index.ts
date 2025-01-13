// import { type SchemaTypeDefinition } from 'sanity'
// import product from './product'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [product],
// }


import { type SchemaTypeDefinition } from 'sanity'
import { productData } from './schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productData,
  ],
}