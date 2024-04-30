package br.brazona.task.apitest;

import io.restassured.RestAssured;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

@RunWith(SpringJUnit4ClassRunner.class)
public class APITest {

    public static String urnAuth = "/authentication/oauth/token";
    public static String hostURI;
    public static String userName;
    public static String userPass;
    public static String userGrant;
    public static String bodyAuth;
    public static String authUser;
    public static String authPass;

    @BeforeClass
    public static void setup() throws IOException {

        String rootPath = Thread.currentThread().getContextClassLoader().getResource("").getPath();
        String appConfigPath = rootPath + "application.properties";

        Properties appProps = new Properties();
        appProps.load(new FileInputStream(appConfigPath));
        hostURI = appProps.getProperty("host");
        userName = appProps.getProperty("userName");
        userPass = appProps.getProperty("user_pass");
        userGrant = appProps.getProperty("user_grant");
        authUser = appProps.getProperty("auth_user");
        authPass = appProps.getProperty("auth_pass");




    }

    @Test
    public void naoDeveAutenticarBasicAuth() {
        RestAssured.given()
                .when()
                .post(urnAuth)
                .then()
                .statusCode(401)
        ;
    }


    @Test
    public void naoDeveAutenticarUser() {
        RestAssured.given()
                .when()
                .post(urnAuth)
                .then()
                .statusCode(401)
        ;
    }

    @Test
    public void deveAutenticar() {
        RestAssured.given().with().auth().preemptive()
                .basic(authUser, authPass)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .formParam("grant_type", userGrant)
                .formParam("username", userName)
                .formParam("password", userPass)
                .post(urnAuth)
                .then()
                .statusCode(200);
    }
}

