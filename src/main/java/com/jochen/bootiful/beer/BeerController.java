package com.jochen.bootiful.beer;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class BeerController {
    private BeerRepo repo;

    public BeerController (BeerRepo repo){
        this.repo= repo;
    }

    @GetMapping("/good-beers")
    @CrossOrigin(origins = "http://localhost:3000")
    public Collection<Beer> goodBeers(){
        return repo.findAll().stream().filter(this::isGreat).collect(Collectors.toList());
    }

    @PostMapping("/add-beers")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:3000")
    public void addBeer(@RequestBody Beer beer)
            throws Exception{
        System.out.println(beer);
        System.out.println(repo.save(beer));
    }

    private boolean isGreat(Beer beer){
        return beer.isGood();
    }
}
