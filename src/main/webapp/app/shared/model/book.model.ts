import { IComment } from 'app/shared/model/comment.model';
import { IAuthor } from 'app/shared/model/author.model';
import { IGenre } from 'app/shared/model/genre.model';

export interface IBook {
  id?: string;
  name?: string;
  description?: string;
  comments?: IComment[];
  author?: IAuthor;
  genre?: IGenre;
}

export class Book implements IBook {
  constructor(
    public id?: string,
    public name?: string,
    public description?: string,
    public comments?: IComment[],
    public author?: IAuthor,
    public genre?: IGenre
  ) {}
}
