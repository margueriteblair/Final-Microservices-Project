package com.margieblair.Authentication.Services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class ErrorReturningService {
    public ResponseEntity<?> ErrorReturningService(BindingResult result) {
        if (result.hasErrors()) {
            HashMap<String, String> errorMap = new HashMap<String, String>();
            for (FieldError err : result.getFieldErrors()) {
                errorMap.put(err.getField(), err.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}

