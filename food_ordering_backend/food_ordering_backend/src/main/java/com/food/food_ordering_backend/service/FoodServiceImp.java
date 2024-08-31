package com.food.food_ordering_backend.service;

import com.food.food_ordering_backend.model.FoodDetails;
import com.food.food_ordering_backend.repository.FoodRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.sql.rowset.serial.SerialBlob;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;
import java.util.List;

@Service
@Data
@AllArgsConstructor
public class FoodServiceImp implements FoodService{

    @Autowired
    private FoodRepository foodRepository;

    private static final long MAX_IMAGE_SIZE = 5 * 1024 * 1024;

    @Override
    public FoodDetails addFoodDetails(String name, String price, String description, String imageUrl,String foodType) throws SQLException, IOException {

        FoodDetails foodDetails = new FoodDetails();
        foodDetails.setFoodName(name);
        foodDetails.setPrice(price);
        foodDetails.setDescription(description);
        foodDetails.setImageUrl(imageUrl);
        foodDetails.setFoodType(foodType);


        return foodRepository.save(foodDetails);
    }

    @Override
    public List<FoodDetails> getAllFoods() {

        return foodRepository.findAll();
    }


}
