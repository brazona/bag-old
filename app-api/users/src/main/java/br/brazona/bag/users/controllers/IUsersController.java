package br.brazona.bag.users.controllers;

import br.brazona.bag.users.entities.UsersEntity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;

@Api(value="User Service", description="This service provides user data for authentication, activation and deactivation.")
public interface IUsersController {
    @ApiOperation(value = "Check a user's registration via email.", response = Iterable.class)
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    }
    )
    public ResponseEntity<UsersEntity> searchByEmail(@RequestParam String email);
}
