#!/usr/bin/env python3
"""
Quick test to verify the Flask backend is working
"""

import requests
import json
import time

def test_backend():
    """Test if the backend is running"""
    print("🧪 Testing YoSOC Flask Backend...")
    print("=" * 40)
    
    # Test health endpoint
    try:
        response = requests.get("http://localhost:5000/health", timeout=5)
        if response.status_code == 200:
            print("✅ Backend is running!")
            print(f"   Health check: {response.json()}")
            return True
        else:
            print(f"❌ Backend responded with status: {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ Backend is not running!")
        print("   Please start the server first:")
        print("   cd backend")
        print("   python app.py")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

def test_submit_application():
    """Test submitting an application"""
    print("\n📝 Testing application submission...")
    
    test_data = {
        "first_name": "Test",
        "last_name": "User",
        "email": "test@example.com",
        "country": "Test Country",
        "role": "Contributor",
        "experience_level": "Beginner",
        "technical_skills": "Python, JavaScript",
        "why_join": "Testing the API",
        "time_commitment": "5-10 hours",
        "agree_terms": True
    }
    
    try:
        response = requests.post(
            "http://localhost:5000/submit",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=5
        )
        
        if response.status_code == 200:
            print("✅ Application submitted successfully!")
            print(f"   Response: {response.json()}")
            return True
        else:
            print(f"❌ Submission failed with status: {response.status_code}")
            print(f"   Response: {response.json()}")
            return False
    except Exception as e:
        print(f"❌ Error submitting application: {e}")
        return False

def main():
    """Main function"""
    print("🎯 YoSOC Backend Quick Test")
    print("=" * 40)
    
    # Test if backend is running
    if not test_backend():
        return
    
    # Test application submission
    test_submit_application()
    
    print("\n" + "=" * 40)
    print("✅ Backend is working correctly!")
    print("🌐 Frontend: http://localhost:3000")
    print("🔧 Backend: http://localhost:5000")
    print("📊 Excel file: yosoc_applications.xlsx")
    print("=" * 40)

if __name__ == "__main__":
    main()
