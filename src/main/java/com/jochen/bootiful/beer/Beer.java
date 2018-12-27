package com.jochen.bootiful.beer;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Beer {

    @Id
    @GeneratedValue
    private long id;
    @JsonProperty
    private String name;
    @JsonProperty
    private boolean isGood;

    public Beer(){}
    public Beer(String name){
        this.name = name;
        this.isGood = !name.equals("Budweiser") &&
                        !name.equals("Coors Light") &&
                        !name.equals("PBR");
    }

    public Beer(String name, boolean isGood) {
        this.name = name;
        this.isGood = isGood;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isGood() {
        return isGood;
    }

    public void setGood(boolean good) {
        isGood = good;
    }

    @Override
    public String toString() {
        return "Beer{ id= '"+id+"' , name= '"+name+"' , isGood: '"+isGood+"'}";
    }

}
