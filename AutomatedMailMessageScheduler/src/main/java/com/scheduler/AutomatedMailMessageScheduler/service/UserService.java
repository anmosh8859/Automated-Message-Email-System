package com.scheduler.AutomatedMailMessageScheduler.service;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService{
    User createUser(User user) throws NoSuchAlgorithmException;
    List<User> getAllUsers();
}
