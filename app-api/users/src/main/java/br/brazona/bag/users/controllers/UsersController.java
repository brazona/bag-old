package br.brazona.bag.users.controllers;

import br.brazona.bag.users.entities.UsersEntity;
import br.brazona.bag.users.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1")

public class UsersController {
    @Autowired
    private UsersService usersService;

    @GetMapping(value = "/search/email")
    public ResponseEntity<UsersEntity>searchByEmail(@RequestParam String email){
        UsersEntity user = usersService.findByEmail(email);
        return ResponseEntity.ok(user);
    }
}
