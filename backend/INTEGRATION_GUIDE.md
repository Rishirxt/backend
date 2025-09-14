# YoSOC Application Backend - Integration Guide

## 🎯 Overview

A complete Flask backend system that accepts POST requests from the YoSOC application form and stores the data into an Excel file (`yosoc_applications.xlsx`).

## 📁 Files Created

- `app.py` - Main Flask application with all endpoints
- `requirements.txt` - Python dependencies
- `test_api.py` - Comprehensive API testing script
- `demo.py` - Demo script with sample data
- `start_and_test.py` - Server startup and testing script
- `README.md` - Detailed API documentation
- `INTEGRATION_GUIDE.md` - This integration guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Start the server:**
   ```bash
   python app.py
   ```

3. **Server will run on:** `http://localhost:5000`

## 📊 Excel File Structure

The application data is automatically stored in `yosoc_applications.xlsx` with these columns:

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

## 🔌 API Endpoints

### POST /submit
Submit a new application form.

**Required fields:**
- `first_name`, `last_name`, `email`, `country`
- `role`, `experience_level`, `technical_skills`
- `why_join`, `time_commitment`, `agree_terms`

**Optional fields:**
- `github`, `portfolio`, `updates_subscription`

**Response:**
```json
{
  "status": "success",
  "message": "Application stored successfully"
}
```

### GET /health
Health check endpoint.

### GET /applications
Retrieve all stored applications (admin endpoint).

## 🌐 Frontend Integration

### JavaScript Example

```javascript
async function submitApplication(formData) {
  try {
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.status === 'success') {
      alert('Application submitted successfully!');
      // Reset form or redirect
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit application');
  }
}
```

### Form Data Structure

```javascript
const formData = {
  first_name: "John",
  last_name: "Doe", 
  email: "john@example.com",
  country: "United States",
  role: "Contributor",
  experience_level: "Intermediate",
  technical_skills: "Python, JavaScript, React",
  why_join: "I want to contribute to open source projects",
  github: "https://github.com/johndoe",
  portfolio: "https://johndoe.dev",
  time_commitment: "10-15 hours per week",
  agree_terms: true,
  updates_subscription: true
};
```

## 🧪 Testing

### Run the demo:
```bash
python demo.py
```

### Test the API:
```bash
python test_api.py
```

### Manual testing with curl:

1. **Health check:**
   ```bash
   curl http://localhost:5000/health
   ```

2. **Submit application:**
   ```bash
   curl -X POST http://localhost:5000/submit \
     -H "Content-Type: application/json" \
     -d '{
       "first_name": "John",
       "last_name": "Doe",
       "email": "john@example.com",
       "country": "USA",
       "role": "Contributor",
       "experience_level": "Intermediate",
       "technical_skills": "Python, JavaScript",
       "why_join": "Want to contribute",
       "time_commitment": "10 hours/week",
       "agree_terms": true
     }'
   ```

3. **Get all applications:**
   ```bash
   curl http://localhost:5000/applications
   ```

## ✅ Features Implemented

- ✅ POST /submit endpoint for form submissions
- ✅ Excel file creation with proper headers
- ✅ Data validation for required fields
- ✅ Error handling and logging
- ✅ Health check endpoint
- ✅ Admin endpoint to view all applications
- ✅ Automatic timestamp for submissions
- ✅ Comprehensive testing suite
- ✅ Sample data generation
- ✅ Frontend integration examples

## 🔧 Configuration

The backend is configured to:
- Run on `localhost:5000`
- Create Excel file in the same directory as `app.py`
- Accept JSON data with proper validation
- Return appropriate HTTP status codes
- Log errors for debugging

## 📝 Next Steps

1. **Start the Flask server** using `python app.py`
2. **Integrate with your frontend** using the provided JavaScript examples
3. **Test the API** using the provided test scripts
4. **Monitor the Excel file** to see submitted applications

## 🎉 Success!

Your YoSOC application backend is now ready to handle form submissions and store them in Excel format!
