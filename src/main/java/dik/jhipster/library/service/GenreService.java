package dik.jhipster.library.service;

import dik.jhipster.library.domain.Genre;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link Genre}.
 */
public interface GenreService {

    /**
     * Save a genre.
     *
     * @param genre the entity to save.
     * @return the persisted entity.
     */
    Genre save(Genre genre);

    /**
     * Get all the genres.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Genre> findAll(Pageable pageable);


    /**
     * Get the "id" genre.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Genre> findOne(String id);

    /**
     * Delete the "id" genre.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
