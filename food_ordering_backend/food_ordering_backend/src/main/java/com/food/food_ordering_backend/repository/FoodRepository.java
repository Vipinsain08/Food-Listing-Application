package com.food.food_ordering_backend.repository;

import com.food.food_ordering_backend.model.FoodDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Blob;

@Repository
public interface FoodRepository extends JpaRepository<FoodDetails,Long> {


}
