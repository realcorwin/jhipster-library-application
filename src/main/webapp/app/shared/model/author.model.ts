import { IBook } from 'app/shared/model/book.model';

export interface IAuthor {
  id?: string;
  firstName?: string;
  secondName?: string;
  books?: IBook[];
}

export class Author implements IAuthor {
  constructor(public id?: string, public firstName?: string, public secondName?: string, public books?: IBook[]) {}
}
