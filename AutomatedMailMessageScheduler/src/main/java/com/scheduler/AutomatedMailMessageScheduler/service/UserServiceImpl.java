package com.scheduler.AutomatedMailMessageScheduler.service;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import com.scheduler.AutomatedMailMessageScheduler.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    private UserRepository repository;

    public User createUser(User user){
        String pass = user.getPassword();
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(pass.getBytes());
            byte[] digest = md.digest();
            BigInteger no = new BigInteger(1, digest);
            pass = no.toString(16);
            while (pass.length() < 32) {
                pass = "0" + pass;
            }
            user.setPassword(pass.toUpperCase());
        } catch (NoSuchAlgorithmException e) {
            user = null;
        }

        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }
}