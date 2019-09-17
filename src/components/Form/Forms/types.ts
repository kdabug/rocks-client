export interface User {
  username: string;
  email: string;
  password: string;
  userRockCollection: [];
  userFavoriteRocks: [];
}

export interface Rock {
  rockName: string;
  rockColor: string;
  rockChakra: string;
  rockUses: string;
  chakras: string[];
}
