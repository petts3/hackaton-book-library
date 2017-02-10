import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import domain.Books;
import repository.Reader;
import repository.Writer;

public class Application {

    public static void main(String args[]) {
        final Reader reader = new Reader();
        final Writer writer = new Writer();
        final Books book = reader.readWithCache("Harry Potter");
        System.out.println(writer.toJson(book));
        final Books book2 = reader.readWithCache("9788293059707");
        System.out.println(writer.toJson(book2));

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter String");
        try {
            String s = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}