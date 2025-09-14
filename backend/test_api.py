#!/usr/bin/env python3
"""
Test script for the YoSOC Application Backend API
"""

import requests
import json

# Base URL for the API
BASE_URL = "http://localhost:5000"

def test_health_check():
    """Test the health check endpoint"""
    print("Testing health check...")
    try:
        response = requests.get(f"{BASE_URL}/health")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_submit_application():
    """Test submitting an application"""
    print("\nTesting application submission...")
    
    # Sample application data
    application_data = {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "country": "United States",
        "role": "Contributor",
        "experience_level": "Intermediate",
        "technical_skills": "Python, JavaScript, React, Node.js, MongoDB",
        "why_join": "I want to contribute to open source projects and learn from experienced developers. I'm passionate about building meaningful software that makes a difference.",
        "github": "https://github.com/johndoe",
        "portfolio": "https://johndoe.dev",
        "time_commitment": "10-15 hours per week",
        "agree_terms": True,
        "updates_subscription": True
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/submit",
            json=application_data,
            headers={"Content-Type": "application/json"}
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_get_applications():
    """Test retrieving all applications"""
    print("\nTesting get applications...")
    try:
        response = requests.get(f"{BASE_URL}/applications")
        print(f"Status Code: {response.status_code}")
        data = response.json()
        print(f"Response: {json.dumps(data, indent=2)}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_invalid_submission():
    """Test submitting invalid data"""
    print("\nTesting invalid submission...")
    
    # Missing required fields
    invalid_data = {
        "first_name": "Jane",
        "email": "jane@example.com"
        # Missing required fields
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/submit",
            json=invalid_data,
            headers={"Content-Type": "application/json"}
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 400
    except Exception as e:
        print(f"Error: {e}")
        return False

def main():
    """Run all tests"""
    print("=" * 50)
    print("YoSOC Application Backend API Tests")
    print("=" * 50)
    
    tests = [
        ("Health Check", test_health_check),
        ("Submit Application", test_submit_application),
        ("Get Applications", test_get_applications),
        ("Invalid Submission", test_invalid_submission)
    ]
    
    results = []
    for test_name, test_func in tests:
        print(f"\n{'='*20} {test_name} {'='*20}")
        success = test_func()
        results.append((test_name, success))
        print(f"Result: {'PASS' if success else 'FAIL'}")
    
    print("\n" + "=" * 50)
    print("TEST SUMMARY")
    print("=" * 50)
    
    passed = 0
    for test_name, success in results:
        status = "PASS" if success else "FAIL"
        print(f"{test_name}: {status}")
        if success:
            passed += 1
    
    print(f"\nTotal: {passed}/{len(results)} tests passed")
    
    if passed == len(results):
        print("🎉 All tests passed!")
    else:
        print("❌ Some tests failed. Check the output above.")

if __name__ == "__main__":
    main()
