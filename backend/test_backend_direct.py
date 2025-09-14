#!/usr/bin/env python3
"""
Direct test of the backend functions without Flask server
"""

from app import append_application_to_excel, check_email_exists, create_application_excel_file_if_not_exists

def test_backend_functions():
    """Test the backend functions directly"""
    print("Testing Y-SoC Backend Functions")
    print("="*50)
    
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
    
    print("1. Creating Excel file...")
    create_application_excel_file_if_not_exists()
    print("✅ Excel file created/verified")
    
    print("\n2. Testing first application submission...")
    success, message = append_application_to_excel(test_application)
    if success:
        print(f"✅ First application submitted: {message}")
    else:
        print(f"❌ First application failed: {message}")
        return
    
    print("\n3. Testing email uniqueness check...")
    email_exists = check_email_exists("john.doe@example.com")
    if email_exists:
        print("✅ Email uniqueness check working - email found")
    else:
        print("❌ Email uniqueness check failed - email not found")
    
    print("\n4. Testing duplicate email submission...")
    success, message = append_application_to_excel(test_application)
    if not success and "already registered" in message:
        print(f"✅ Duplicate email correctly rejected: {message}")
    else:
        print(f"❌ Duplicate email not properly handled: {message}")
    
    print("\n5. Testing different email...")
    test_application["email"] = "jane.doe@example.com"
    success, message = append_application_to_excel(test_application)
    if success:
        print(f"✅ Different email accepted: {message}")
    else:
        print(f"❌ Different email rejected: {message}")
    
    print("\n" + "="*50)
    print("Backend function tests completed!")

if __name__ == "__main__":
    test_backend_functions()
