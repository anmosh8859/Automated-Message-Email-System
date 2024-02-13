package com.scheduler.AutomatedMailMessageScheduler.controller;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import com.scheduler.AutomatedMailMessageScheduler.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userServiceImpl.getAllUsers(),HttpStatus.OK);
    }
}
