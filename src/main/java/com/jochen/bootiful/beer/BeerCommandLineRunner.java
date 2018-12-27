package com.jochen.bootiful.beer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class BeerCommandLineRunner implements CommandLineRunner {
    private final BeerRepo repo;

    public BeerCommandLineRunner(BeerRepo repo){
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        // Top beers from https://www.beeradvocate.com/lists/top/
        Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius",
                "Budweiser", "Coors Light", "PBR").forEach(name ->
                repo.save(new Beer(name))
        );
        repo.findAll().forEach(System.out::println);
    }
}
