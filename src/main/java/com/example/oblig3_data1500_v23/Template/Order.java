package com.example.oblig3_data1500_v23.Template;
public class Order {
    private String movie;
    private int amount;
    private String name;
    private String phone;
    private String email;

    public Order(){}

    public Order(String movie, int amount, String name, String phone, String email){
        this.movie=movie;
        this.amount=amount;
        this.name=name;
        this.phone=phone;
        this.email=email;
    }


    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
