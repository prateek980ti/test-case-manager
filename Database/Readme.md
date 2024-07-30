**Set up PostgreSQL database**

- **Create a PostgreSQL database (if you don't have one):**

    ```sql
    CREATE DATABASE testdb;
    ```

- **Create the `testcases` table and insert test data:**

    ```sql
    CREATE TABLE testcases (
        id SERIAL PRIMARY KEY,
        test_case_name VARCHAR(255) NOT NULL,
        estimate_time INT NOT NULL,
        module VARCHAR(255) NOT NULL,
        priority VARCHAR(50) NOT NULL,
        status VARCHAR(50),
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO testcases (test_case_name, estimate_time, module, priority, status)
    VALUES
    ('Test Case 1', 5, 'Onboarding', 'Low', 'Select'),
    ('Test Case 2', 5, 'User Log In', 'Medium', 'Select'),
    ('Test Case 3', 5, 'Password', 'High', 'Select'),
    ('Test Case 4', 10, 'Payment', 'High', 'Select'),
    ('Test Case 5', 7, 'Dashboard', 'Medium', 'Select'),
    ('Test Case 6', 4, 'Logout', 'Low', 'Select');
    ```
