#!/usr/bin/env python3
"""
Demo script showing how to use the YoSOC Flask Backend
This script demonstrates the API functionality without requiring a running server
"""

import pandas as pd
import os
from datetime import datetime

def create_sample_excel():
    """Create a sample Excel file with application data"""
    print("📊 Creating sample Excel file...")
    
    # Define headers
    headers = [
        "First Name", "Last Name", "Email Address", "Country", "Role", 
        "Experience Level", "Technical Skills", "Why Join YoSOC?", 
        "GitHub Profile", "Portfolio/Website", "Time Commitment", 
        "Agreed To Terms", "Updates Subscription", "Submission Date"
    ]
    
    # Sample data
    sample_data = [
        {
            "First Name": "John",
            "Last Name": "Doe",
            "Email Address": "john.doe@example.com",
            "Country": "United States",
            "Role": "Contributor",
            "Experience Level": "Intermediate",
            "Technical Skills": "Python, JavaScript, React, Node.js",
            "Why Join YoSOC?": "I want to contribute to open source projects and learn from experienced developers.",
            "GitHub Profile": "https://github.com/johndoe",
            "Portfolio/Website": "https://johndoe.dev",
            "Time Commitment": "10-15 hours per week",
            "Agreed To Terms": True,
            "Updates Subscription": True,
            "Submission Date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        },
        {
            "First Name": "Jane",
            "Last Name": "Smith",
            "Email Address": "jane.smith@example.com",
            "Country": "Canada",
            "Role": "Mentor",
            "Experience Level": "Expert",
            "Technical Skills": "Python, Django, PostgreSQL, Docker, AWS",
            "Why Join YoSOC?": "I want to mentor young developers and share my experience with the community.",
            "GitHub Profile": "https://github.com/janesmith",
            "Portfolio/Website": "https://janesmith.tech",
            "Time Commitment": "20+ hours per week",
            "Agreed To Terms": True,
            "Updates Subscription": True,
            "Submission Date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
    ]
    
    # Create DataFrame
    df = pd.DataFrame(sample_data)
    
    # Save to Excel
    excel_file = "yosoc_applications.xlsx"
    df.to_excel(excel_file, sheet_name="Applications", index=False)
    
    print(f"✅ Created {excel_file} with {len(sample_data)} sample applications")
    return excel_file

def show_api_usage():
    """Show how to use the API"""
    print("\n" + "=" * 60)
    print("🚀 YoSOC Flask Backend API Usage")
    print("=" * 60)
    
    print("\n📋 Available Endpoints:")
    print("  POST /submit - Submit application form")
    print("  GET /health - Health check")
    print("  GET /applications - Get all applications")
    
    print("\n🔧 To start the server:")
    print("  python app.py")
    print("  # Server will run on http://localhost:5000")
    
    print("\n📝 Example API calls:")
    print("\n1. Health Check:")
    print("   curl http://localhost:5000/health")
    
    print("\n2. Submit Application:")
    print("   curl -X POST http://localhost:5000/submit \\")
    print("     -H 'Content-Type: application/json' \\")
    print("     -d '{")
    print('       "first_name": "John",')
    print('       "last_name": "Doe",')
    print('       "email": "john@example.com",')
    print('       "country": "USA",')
    print('       "role": "Contributor",')
    print('       "experience_level": "Intermediate",')
    print('       "technical_skills": "Python, JavaScript",')
    print('       "why_join": "Want to contribute",')
    print('       "time_commitment": "10 hours/week",')
    print('       "agree_terms": true')
    print("     }'")
    
    print("\n3. Get All Applications:")
    print("   curl http://localhost:5000/applications")
    
    print("\n📊 Excel File Structure:")
    print("   File: yosoc_applications.xlsx")
    print("   Sheet: Applications")
    print("   Columns: First Name, Last Name, Email, Country, Role, etc.")

def show_frontend_integration():
    """Show how to integrate with the frontend"""
    print("\n" + "=" * 60)
    print("🌐 Frontend Integration")
    print("=" * 60)
    
    print("\n📝 JavaScript code to submit form data:")
    print("""
// Example JavaScript for form submission
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

// Example form data structure
const formData = {
  first_name: document.getElementById('firstName').value,
  last_name: document.getElementById('lastName').value,
  email: document.getElementById('email').value,
  country: document.getElementById('country').value,
  role: document.getElementById('role').value,
  experience_level: document.getElementById('experienceLevel').value,
  technical_skills: document.getElementById('technicalSkills').value,
  why_join: document.getElementById('whyJoin').value,
  github: document.getElementById('github').value,
  portfolio: document.getElementById('portfolio').value,
  time_commitment: document.getElementById('timeCommitment').value,
  agree_terms: document.getElementById('agreeTerms').checked,
  updates_subscription: document.getElementById('updatesSubscription').checked
};
""")

def main():
    """Main function"""
    print("🎯 YoSOC Flask Backend Demo")
    print("=" * 40)
    
    # Create sample Excel file
    excel_file = create_sample_excel()
    
    # Show API usage
    show_api_usage()
    
    # Show frontend integration
    show_frontend_integration()
    
    print("\n" + "=" * 60)
    print("✅ Demo completed!")
    print(f"📁 Check the generated file: {excel_file}")
    print("🚀 To start the server: python app.py")
    print("=" * 60)

if __name__ == "__main__":
    main()
