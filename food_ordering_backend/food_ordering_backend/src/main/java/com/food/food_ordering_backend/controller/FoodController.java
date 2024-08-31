package com.food.food_ordering_backend.controller;

import com.food.food_ordering_backend.model.FoodDetails;
import com.food.food_ordering_backend.request.FoodRequest;
import com.food.food_ordering_backend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@RestController
@CrossOrigin
public class  FoodController {

    @Autowired
    private FoodService foodService;

    @PostMapping("/add-food")
    public ResponseEntity<String> addNewFood(@RequestBody FoodRequest foodRequest) throws SQLException, IOException {


       FoodDetails foodDetails =  foodService.addFoodDetails(foodRequest.getName(),foodRequest.getPrice(),foodRequest.getDescription(),foodRequest.getImageUrl(),foodRequest.getFoodType());

        if(foodDetails==null)
        {
            return new ResponseEntity<>("Details are not saved", HttpStatus.BAD_REQUEST);
        }
            return new ResponseEntity<>("Food Added Successfully",HttpStatus.CREATED);
    }


    @GetMapping("/food")
    public ResponseEntity<List<FoodDetails>> getFoodDetails() throws SQLException, IOException {
        List<FoodDetails> foods =foodService.getAllFoods();
        if(foods.isEmpty())
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(foods,HttpStatus.OK);
    }


}
