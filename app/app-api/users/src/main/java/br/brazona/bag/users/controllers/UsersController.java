package br.brazona.bag.users.controllers;

import br.brazona.bag.users.entities.UsersEntity;
import br.brazona.bag.users.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1")
public class UsersController implements IUsersController{
    @Autowired
    private UsersService usersService;

    @Override
    @GetMapping(value = "/search/email")
    public ResponseEntity<UsersEntity> searchByEmail(String email) {
        return ResponseEntity.ok(usersService.findByEmail(email));
    }
}
