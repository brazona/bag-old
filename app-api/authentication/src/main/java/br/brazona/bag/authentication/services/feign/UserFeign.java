package br.brazona.bag.authentication.services.feign;

import br.brazona.bag.authentication.dto.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Component
@FeignClient(name = "users", path = "/v1")
public interface UserFeign {
    @GetMapping(value = "/search/email")
    ResponseEntity<UserDTO> findByEmail(@RequestParam String email);
}
