package br.brazona.bag.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EntityScan(basePackages = { "br.brazona.bag.users.entities" })
@ComponentScan(basePackages = { "br.brazona.bag.users.*" })
@EnableJpaRepositories(basePackages = { "br.brazona.bag.users.repositories" })
@EnableTransactionManagement
@EnableWebMvc
@EnableFeignClients
@SpringBootApplication
@RestController
@EnableAutoConfiguration
@EnableCaching
public class UsersApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}

}
