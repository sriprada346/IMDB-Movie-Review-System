package dev.buddies.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Repository
@RequestMapping
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> findMovieByImdbId(String imdbId);//dynamically   //find movie by id
}
