import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterLibraryApplicationSharedLibsModule,
  JhipsterLibraryApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterLibraryApplicationSharedLibsModule, JhipsterLibraryApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterLibraryApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterLibraryApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterLibraryApplicationSharedModule
    };
  }
}
