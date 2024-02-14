package com.scheduler.AutomatedMailMessageScheduler.controller;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import com.scheduler.AutomatedMailMessageScheduler.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.List;
record Credentials(String username, String password){}
record Response(String token, String role){}

@RestController
@RequestMapping("users")
public class UserController {

    public UserController(UserServiceImpl userServiceImpl) {
        this.userServiceImpl = userServiceImpl;
    }

    private UserServiceImpl userServiceImpl;

    @PostMapping
    ResponseEntity<User> createUser(@RequestBody User user){
        user = userServiceImpl.createUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/authenticate")
    ResponseEntity<Response> authenticate(@RequestBody Credentials credentials){
        User user = userServiceImpl.getUserByEmail(credentials.username());
        String pass;
        System.out.println(credentials.username() + credentials.password());
        try {
            pass = userServiceImpl.encryptMD5(credentials.password());
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>(new Response("Incorrect Password",""),HttpStatus.UNAUTHORIZED);
        }
        if(user!=null){
            if(pass.equals(user.getPassword())){
                String token = Base64.getEncoder()
                        .encodeToString((credentials.username() + credentials.password())
                                .getBytes());

                Response response = new Response(token, user.getRole());
                return new ResponseEntity<Response>(response, HttpStatus.OK);
            } return new ResponseEntity<>(new Response("Incorrect Password",""),HttpStatus.UNAUTHORIZED);
        }else{
            return new ResponseEntity<>(new Response("Incorrect Username",""),HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userServiceImpl.getAllUsers(),HttpStatus.OK);
    }
}