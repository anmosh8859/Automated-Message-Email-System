package com.scheduler.AutomatedMailMessageScheduler.service;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService{
    String encryptMD5(String pass) throws NoSuchAlgorithmException;
    User createUser(User user);
    List<User> getAllUsers();
    User getUserByEmail(String email);

}
