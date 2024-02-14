package com.scheduler.AutomatedMailMessageScheduler.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Document(collection = "user")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    String id;
    String username;
    String password;
    @Indexed(unique = true)
    @Field(name="email_id")
    String email;
    @Field(name = "phone_number")
    String phone;
    @Field(name = "date_of_birth")
    LocalDate dob;
    String role;
    public String getId() {
        return id;
    }
}
