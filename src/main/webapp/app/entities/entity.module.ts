import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'author',
        loadChildren: './author/author.module#JhipsterLibraryApplicationAuthorModule'
      },
      {
        path: 'genre',
        loadChildren: './genre/genre.module#JhipsterLibraryApplicationGenreModule'
      },
      {
        path: 'book',
        loadChildren: './book/book.module#JhipsterLibraryApplicationBookModule'
      },
      {
        path: 'comment',
        loadChildren: './comment/comment.module#JhipsterLibraryApplicationCommentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterLibraryApplicationEntityModule {}
