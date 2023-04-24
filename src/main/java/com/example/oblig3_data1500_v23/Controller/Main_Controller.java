package com.example.oblig3_data1500_v23.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.oblig3_data1500_v23.Template.Order;
import java.util.ArrayList;
import java.util.List;

@RestController
public class Main_Controller {

    private final ArrayList<Order> ticketOrder = new ArrayList<>();

    @PostMapping("/addOrder")
    public void saveOrder(Order order){
        ticketOrder.add(order);

    }
    @GetMapping("/getOrders")//Returns orders to be printed
    public List<Order> getAllOrders(){
        return ticketOrder;
    }
    @PostMapping("/deleteOrders")//Since we don't have a primary key yet, there is no extra usebility with using Deletemapping
    public void delete() {
        ticketOrder.clear();
    }
    }
