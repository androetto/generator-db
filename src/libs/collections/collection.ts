export interface ICollection {
  database: string;
  collection: string;
  fields: [{
    key: string,
    values: string
  }]
}

