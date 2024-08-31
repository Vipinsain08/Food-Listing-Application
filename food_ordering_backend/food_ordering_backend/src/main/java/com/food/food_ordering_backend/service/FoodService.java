package com.food.food_ordering_backend.service;

import com.food.food_ordering_backend.model.FoodDetails;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface FoodService {
    FoodDetails addFoodDetails(String name, String price, String description, String imageUrl,String foodType) throws SQLException, IOException;

    List<FoodDetails> getAllFoods();


}
