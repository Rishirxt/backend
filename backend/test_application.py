#!/usr/bin/env python3
"""
Test script for the application submission endpoint
"""

import requests
import json

# Test data
test_application = {
    "first_name": "John",
    "last_name": "Doe", 
    "email": "john.doe@example.com",
    "country": "United States",
    "role": "Contributor",
    "experience_level": "Intermediate",
    "technical_skills": "Python, JavaScript, React",
    "why_join": "I want to contribute to open source projects and learn from experienced developers",
    "github": "https://github.com/johndoe",
    "portfolio": "https://johndoe.dev",
    "time_commitment": "10-15 hours per week",
    "agree_terms": True,
    "updates_subscription": True
}

def test_application_submission():
    """Test the application submission endpoint"""
    url = "http://localhost:5000/submit"
    
    print("Testing application submission...")
    print(f"URL: {url}")
    print(f"Data: {json.dumps(test_application, indent=2)}")
    print("-" * 50)
    
    try:
        response = requests.post(url, json=test_application)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            print("✅ Application submitted successfully!")
        else:
            print("❌ Application submission failed!")
            
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to server. Make sure Flask is running on localhost:5000")
    except Exception as e:
        print(f"❌ Error: {str(e)}")

def test_duplicate_email():
    """Test submitting the same email again (should fail)"""
    print("\n" + "="*50)
    print("Testing duplicate email submission...")
    print("-" * 50)
    
    url = "http://localhost:5000/submit"
    
    try:
        response = requests.post(url, json=test_application)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 400 and "already registered" in response.json().get("message", ""):
            print("✅ Duplicate email correctly rejected!")
        else:
            print("❌ Duplicate email was not properly handled!")
            
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to server. Make sure Flask is running on localhost:5000")
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    print("Y-SoC Application Backend Test")
    print("="*50)
    
    # Test first submission
    test_application_submission()
    
    # Test duplicate email
    test_duplicate_email()
    
    print("\n" + "="*50)
    print("Test completed!")
