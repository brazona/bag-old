package br.brazona.bag.institutions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class InstitutionsApplication {

	public static void main(String[] args) {
		SpringApplication.run(InstitutionsApplication.class, args);
	}

}
