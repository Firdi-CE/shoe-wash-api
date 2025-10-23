# Backend CRUD API for a shoe washing service
this project is a simple rest api for managing the list of items in a shoe washing service
---
#Live API URL
The API is deployed and live at the following url:
https://shoe-wash-api.vercel.app/
---

# Technologies Used
* **Backend:** Node.JS, Express.js
* **Database:** Supabase (PostgreSQL)
* **Deployment:** Vercel
---

### API Endpoints
All endpoints are relative to the base URL
#### 1. Get All items
* **Method:** 'GET'
* **Endpoint:** '/items'
* **Description:** Retrieves a list of all shoe washing jobs in the database.
* **Example 'curl':**
    ```bash
    curl [https://shoe-wash-api.vercel.app/items](https://shoe-wash-api.vercel.app/)
    ```
#### 2. Get Items by Status (Filter)
* **Method:** `GET`
* **Endpoint:** `/items?status={statusName}`
* **Description:** Adds a new shoe washing job to the database.
* **Request Body (JSON):**
    ```json
    {
    "customer_name": "New Customer",
    "status": "Washing"
    }
    ```
* **Example `curl`:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"customer_name" :"New Customer"
  ```

 #### 4. Update an Item's Status
* **Method:** `PUT`
* **Endpoint:** `/items/{id}`
* **Description:** Updates the status of a specific job using its unique ID.
* **Request Body (JSON):**
    ```json
    {
      "status": "Completed"
    }
    ```
* **Example `curl`:**
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"status":"Completed"}' [https://your-api-url.vercel.app/items/1](https://your-api-url.vercel.app/items/1)
    ```

#### 5. Delete an Item
* **Method:** `DELETE`
* **Endpoint:** `/items/{id}`
* **Description:** Deletes a specific job from the database using its unique ID.
* **Example `curl`:**
    ```bash
    curl -X DELETE [https://your-api-url.vercel.app/items/1](https://your-api-url.vercel.app/items/1)
    ```
