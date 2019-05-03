import { IBook } from 'app/shared/model/book.model';

export interface IGenre {
  id?: string;
  genreName?: string;
  books?: IBook[];
}

export class Genre implements IGenre {
  constructor(public id?: string, public genreName?: string, public books?: IBook[]) {}
}
