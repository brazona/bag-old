package br.brazona.bag.apigateway.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import springfox.documentation.swagger.web.SwaggerResource;
import springfox.documentation.swagger.web.SwaggerResourcesProvider;

@Component
@Primary
public class CustomSwaggerResourcesProvider implements SwaggerResourcesProvider {

    @Override
    public List<SwaggerResource> get() {

        return swaggerResourcesList();
    }

    private List<SwaggerResource> swaggerResourcesList() {

        return Arrays.asList(
                swaggerResource("users", "/users/v2/api-docs"),
                swaggerResource("authentication", "/authentication/swagger")
        );
    }

    private SwaggerResource swaggerResource(String name, String location) {

        SwaggerResource resource = new SwaggerResource();
        resource.setName(name);
        resource.setLocation(location);
        resource.setSwaggerVersion("2.0");
        return resource;
    }
}