interface Asset {
  _type: string;
  _id: string;
  _ref: string;
  // incluye aquí otras propiedades que puedan existir en el objeto asset
}

export interface Poster {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  titleOrange: string; // nuevo campo
  description: string; // nuevo campo
  alt: string;
  poster: {
    _type: string;
    attribution: string;
    caption: string;
    asset: Asset;
  };
}
