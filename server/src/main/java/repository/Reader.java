package repository;

import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;

import domain.Books;

public class Reader {

    private final LoadingCache<String, Books> cache;
    private final RestTemplate restTemplate;
    private final String unformatedUrl = "https://www.googleapis.com/books/v1/volumes?q=%s";

    public Reader() {
        this.cache = Caffeine.newBuilder().expireAfterWrite(8L, TimeUnit.HOURS).build(this::read);
        this.restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(getMessageConverter());
    }

    private List<HttpMessageConverter<?>> getMessageConverter() {
        final ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        final MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setObjectMapper(mapper);
        return Collections.singletonList(converter);
    }

    public Books readWithCache(final String query) {
        return cache.get(query);
    }

    private Books read(final String query) {
        return restTemplate.getForObject(String.format(unformatedUrl, query), Books.class);
    }
}
