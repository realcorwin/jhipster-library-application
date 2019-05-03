import { IBook } from 'app/shared/model/book.model';

export interface IComment {
  id?: string;
  comment?: string;
  book?: IBook;
}

export class Comment implements IComment {
  constructor(public id?: string, public comment?: string, public book?: IBook) {}
}
