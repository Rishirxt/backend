#!/usr/bin/env python3
"""
Simple script to start Flask server and test it
"""

import threading
import time
import requests
import json
from app import app

def start_server():
    """Start Flask server in a separate thread"""
    print("🚀 Starting Flask server...")
    app.run(debug=False, host='0.0.0.0', port=5000, use_reloader=False)

def test_server():
    """Test the server after a short delay"""
    time.sleep(3)  # Wait for server to start
    
    print("\n🧪 Testing server...")
    
    # Test health endpoint
    try:
        response = requests.get("http://localhost:5000/health", timeout=5)
        print(f"✅ Health check: {response.status_code} - {response.json()}")
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        return
    
    # Test submit endpoint
    try:
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
        
        response = requests.post(
            "http://localhost:5000/submit",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=5
        )
        print(f"✅ Submit test: {response.status_code} - {response.json()}")
    except Exception as e:
        print(f"❌ Submit test failed: {e}")
    
    # Test get applications
    try:
        response = requests.get("http://localhost:5000/applications", timeout=5)
        data = response.json()
        print(f"✅ Get applications: {response.status_code} - Found {data.get('count', 0)} applications")
    except Exception as e:
        print(f"❌ Get applications failed: {e}")

def main():
    """Main function"""
    print("=" * 50)
    print("YoSOC Flask Backend - Start and Test")
    print("=" * 50)
    
    # Start server in background thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    # Test the server
    test_server()
    
    print("\n" + "=" * 50)
    print("✅ Flask backend is running on http://localhost:5000")
    print("📊 Excel file: yosoc_applications.xlsx")
    print("🛑 Press Ctrl+C to stop the server")
    print("=" * 50)
    
    try:
        # Keep the main thread alive
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 Server stopped")

if __name__ == "__main__":
    main()
