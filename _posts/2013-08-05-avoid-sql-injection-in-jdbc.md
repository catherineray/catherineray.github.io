---
title: "Avoid SQL Injection in JDBC"
date: "2013-08-05"
categories: 
  - "code"
  - "explanation"
  - "java"
---

Let’s say I’m trying to insert some information into a mySQL table using JDBC.

In mySQL, the type `varchar(225)` is equivalent to the type `String` in Java.

Our example table will be of the format:

```
name varchar(255)
field varchar(255)
university varchar(255)
alive varchar(255)
```

After I import,

```
import java.sql.*;
```

I’ll have to open a connection (I suggest doing this outside of the try-catch).

```
public class EXAMPLEINSERT {

  public static void insertIntoTable(String jdbcURL, String USER, String PASS) {

    Connection conn = null;
    Statement stmt = null;
    try{
        // Open a connection
        conn = DriverManager.getConnection(jdbcURL, USER, PASS);
      
        // Execute insert
        stmt = conn.createStatement();
        String tableName = "TABLENAME";

        // At this point, I might be tempted to do the following ***
        String insertStatement = String.format("INSERT INTO " + tableName + " VALUES ("%s", "%s", "%s", "%s")", name, field, university, alive);
        stmt.executeUpdate(insertStatement);
        // But this is wrong!
    }
    conn.close();
    } catch(Exception e) {
        System.err.println(e.getMessage());
    }
  }
} 
```

But will this stand up to an attack? What if I set

```
String university = "university'); DROP TABLE TABLENAME;--";
```

(The ;-- tells the table that everything after ";" is not part of the query.)

Then my entire table will be deleted! We need to sanitize our inputs.

To avoid SQL injection, (such as the [Bobby Tables post from xkcd](https://xkcd.com/327/)), we must prepare the statement before execution:

```
public class EXAMPLEINSERT {

  public static void insertIntoTable(String jdbcURL, String USER, String PASS) {

    Connection conn = null;
    Statement stmt = null;
    // add Prepared statement outside of try-catch
    PreparedStatement prepareStatement = null;
    try{
        // Open a connection
        conn = DriverManager.getConnection(jdbcURL, USER, PASS);
      
        // Execute insert
        stmt = conn.createStatement();
        String tableName = "TABLENAME";

        // Avoid temptation and deliver yourself from the evils of coding Java as if it were Python.
        String template = "INSERT INTO " + tableName + " (name, field, university, alive) VALUES (?, ?, ?, ?)";

        statement = conn.prepareStatement(template);
        statement.setString(1, name);
        statement.setString(2, field);
        statement.setString(3, university);
        statement.setBoolean(4, alive);

        statement.executeUpdate();
        //More hardcoding? Slightly, but also more robust.
    }
    conn.close();
    } catch(Exception e) {
        System.err.println(e.getMessage());
    }
  }
}
```
