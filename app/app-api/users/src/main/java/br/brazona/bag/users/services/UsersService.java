package br.brazona.bag.users.services;

import br.brazona.bag.users.entities.UsersEntity;
import br.brazona.bag.users.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    UsersRepository usersRepository;
    public UsersEntity findByEmail (String email){
        return usersRepository.findByEmail(email);
    }
}
