package repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import domain.Books;

public class Writer {

    public String toJson(Books books) {
        try {
            return new ObjectMapper().writeValueAsString(books);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
