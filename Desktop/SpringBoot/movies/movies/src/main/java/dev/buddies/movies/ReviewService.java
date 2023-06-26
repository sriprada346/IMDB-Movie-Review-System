package dev.buddies.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import static org.apache.tomcat.jni.SSLConf.apply;
import static org.springframework.data.mongodb.core.query.UntypedExampleMatcher.matching;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate; //creating mongo template  same as repository
    public Review createReview(String reviewBody,String imdbId){  //return review
        Review review = reviewRepository.insert(new Review(reviewBody));  //insert review body in database


        mongoTemplate.update(Movie.class) //dynamic query for update
                .matching(Criteria.where("imdbId").is(imdbId))  //matrching and verifying imdbId
                .apply(new Update().push("reviewIds").value(review)) //update in review according to reviewId
                .first();

        return review;
    }
}