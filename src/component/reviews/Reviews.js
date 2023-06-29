import {useEffect,useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import ReviewForm from '../reviewform/ReviewForm';
import React from 'react'




const Reviews =({getMoviesData,movie,reviews,setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{  //useeffect hook 
        getMoviesData(movieId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev=revText.current;
        console.log("review page ");
        try{
            console.log(rev.value);
            console.log(movieId);
            const response = await api.post("/api/vl/reviews",{reviewBody:rev.value,imdbId:movieId});
            console.log(response);
            console.log("review page ccdscccdc");
            const updatedReviews = [...reviews,{body:rev.value}]; //update state of the reviews array 
            console.log("review page ccdsccdfdfc");
            rev.value = "";
    
            setReviews(updatedReviews); //state of the client dash board   
        }
        catch(err)
        {
            console.error(err);
        } 
    }

    return (
        <Container>
             <Row>
                <Col><h3>Reviews</h3></Col>
             </Row>
             <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText ="Write a Review?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr/>
                                </Col>

                            </Row>
                        
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>                                
                                </>
                            )
                        })
                    }     
                </Col>
             </Row>
             <Row>
                <Col>
                    <hr />
                </Col>
             </Row>
        </Container>
    );

}

export default Reviews

