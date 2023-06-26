package dev.buddies.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/api/vl/movies")
/*@CrossOrigin(origins = "http://localhost:3000")*/


public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping //get method
    public ResponseEntity<List<Movie>> getAllmovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(),HttpStatus.OK); //It gets the movies information from databse and return with http : ok
    }

    @GetMapping("/{imdbId}") //fetching movie details by perticularId
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId)
    {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId),HttpStatus.OK);
    }


}
