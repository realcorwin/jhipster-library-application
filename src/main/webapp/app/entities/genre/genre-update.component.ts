import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IGenre, Genre } from 'app/shared/model/genre.model';
import { GenreService } from './genre.service';

@Component({
  selector: 'jhi-genre-update',
  templateUrl: './genre-update.component.html'
})
export class GenreUpdateComponent implements OnInit {
  genre: IGenre;
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    genreName: []
  });

  constructor(protected genreService: GenreService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ genre }) => {
      this.updateForm(genre);
      this.genre = genre;
    });
  }

  updateForm(genre: IGenre) {
    this.editForm.patchValue({
      id: genre.id,
      genreName: genre.genreName
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const genre = this.createFromForm();
    if (genre.id !== undefined) {
      this.subscribeToSaveResponse(this.genreService.update(genre));
    } else {
      this.subscribeToSaveResponse(this.genreService.create(genre));
    }
  }

  private createFromForm(): IGenre {
    const entity = {
      ...new Genre(),
      id: this.editForm.get(['id']).value,
      genreName: this.editForm.get(['genreName']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGenre>>) {
    result.subscribe((res: HttpResponse<IGenre>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
