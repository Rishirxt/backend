# YoSOC Application Backend

A Flask backend service that handles YoSOC application form submissions and stores them in an Excel file.

## Features

- **POST /submit** - Accepts application form data and stores it in Excel
- **GET /health** - Health check endpoint
- **GET /applications** - Retrieve all applications (admin endpoint)
- Automatic Excel file creation with proper headers
- Data validation for required fields
- Error handling and logging

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Flask server:**
   ```bash
   python app.py
   ```

3. **The server will start on:** `http://localhost:5000`

## API Endpoints

### POST /submit
Submit a new application form.

**Request Body (JSON):**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "country": "United States",
  "role": "Contributor",
  "experience_level": "Intermediate",
  "technical_skills": "Python, JavaScript, React",
  "why_join": "I want to contribute to open source projects",
  "github": "https://github.com/johndoe",
  "portfolio": "https://johndoe.dev",
  "time_commitment": "10-15 hours per week",
  "agree_terms": true,
  "updates_subscription": true
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Application stored successfully"
}
```

### GET /health
Check if the server is running.

**Response:**
```json
{
  "status": "success",
  "message": "Flask backend is running"
}
```

### GET /applications
Retrieve all stored applications (admin endpoint).

**Response:**
```json
{
  "status": "success",
  "data": [...],
  "count": 5
}
```

## Excel File Structure

The application data is stored in `yosoc_applications.xlsx` with the following columns:

- First Name
- Last Name
- Email Address
- Country
- Role
- Experience Level
- Technical Skills
- Why Join YoSOC?
- GitHub Profile
- Portfolio/Website
- Time Commitment
- Agreed To Terms
- Updates Subscription
- Submission Date

## Error Handling

The API returns appropriate HTTP status codes:
- **200** - Success
- **400** - Bad Request (missing required fields)
- **500** - Internal Server Error

## Testing

You can test the API using curl:

```bash
# Health check
curl http://localhost:5000/health

# Submit application
curl -X POST http://localhost:5000/submit \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "country": "United States",
    "role": "Contributor",
    "experience_level": "Intermediate",
    "technical_skills": "Python, JavaScript, React",
    "why_join": "I want to contribute to open source projects",
    "time_commitment": "10-15 hours per week",
    "agree_terms": true
  }'
```
