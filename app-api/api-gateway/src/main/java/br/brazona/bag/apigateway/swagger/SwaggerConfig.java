package br.brazona.bag.apigateway.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

    @Bean
    public Docket api() {

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("br.brazona"))
                .build();
    }
    private ApiInfo metaData() {
        return new ApiInfoBuilder()
                .title("Brazona Administration Game")
                .description("Brazona Administration Game (BAG), é um software capaz de simular relações de trabalho do ambiente corporativo com ênfase nos conceitos da Administração.O conteúdo tem carater educacional e oferece aos usuários a experiência de exercer funções ligadas a administração")
                .version("1.0.0")
                //.license("Apache License Version 2.0")
                //.licenseUrl("https://www.apache.org/licenses/LICENSE-2.0\"")
                .contact(new Contact("Cézar Silva", "ww.brazona.com.br", "contato@brazona.com.br"))
                .build();
    }
}
