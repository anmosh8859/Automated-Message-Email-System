package com.scheduler.AutomatedMailMessageScheduler.repository;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
    public User getUserByEmail(String email);
}
