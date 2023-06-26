package dev.buddies.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//api
@Service
public class MovieService {
    @Autowired //constructor
    private MovieRepository movieRepository;
    public List<Movie> allMovies()
    {
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
