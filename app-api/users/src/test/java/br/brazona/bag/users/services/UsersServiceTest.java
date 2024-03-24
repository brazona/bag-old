package br.brazona.bag.users.services;

import br.brazona.bag.users.entities.UsersEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UsersServiceTest {

    @Mock
    private UsersService service;

    @Test
    @DisplayName("Verifica se um produto está ativo e possui um preço válido")
    void findByEmail() {
        UsersEntity user = service.findByEmail("cezar@gmail.com");
        System.out.println(user);
    }
}