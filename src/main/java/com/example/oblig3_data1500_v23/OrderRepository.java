package com.example.oblig3_data1500_v23;


import com.example.oblig3_data1500_v23.Template.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
}
