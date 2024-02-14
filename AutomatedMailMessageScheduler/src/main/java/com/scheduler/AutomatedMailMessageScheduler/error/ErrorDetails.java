package com.scheduler.AutomatedMailMessageScheduler.error;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ErrorDetails {
    public LocalDateTime timestamp;
    private String message;
    private String details;
}
