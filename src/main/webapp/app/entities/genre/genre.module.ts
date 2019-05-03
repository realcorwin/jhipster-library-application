import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterLibraryApplicationSharedModule } from 'app/shared';
import {
  GenreComponent,
  GenreDetailComponent,
  GenreUpdateComponent,
  GenreDeletePopupComponent,
  GenreDeleteDialogComponent,
  genreRoute,
  genrePopupRoute
} from './';

const ENTITY_STATES = [...genreRoute, ...genrePopupRoute];

@NgModule({
  imports: [JhipsterLibraryApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [GenreComponent, GenreDetailComponent, GenreUpdateComponent, GenreDeleteDialogComponent, GenreDeletePopupComponent],
  entryComponents: [GenreComponent, GenreUpdateComponent, GenreDeleteDialogComponent, GenreDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterLibraryApplicationGenreModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
