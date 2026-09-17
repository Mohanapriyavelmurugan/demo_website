"""Backend tests for the Valtraq Healthcare marketing site.

Covers:
- GET /api/ health
- POST /api/contact happy path and persistence check
- POST /api/contact validation (missing required fields)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "http://localhost:8000").rstrip("/")


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


# ---- Contact ----
def test_contact_submit_success(api):
    payload = {
        "name": f"TEST_User_{uuid.uuid4().hex[:6]}",
        "email": "test.user@example.com",
        "organization": "TEST_Org",
        "message": "TEST_ Interested in a Valtraq CDSS demo.",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["organization"] == payload["organization"]
    assert data["message"] == payload["message"]
    assert "created_at" in data


def test_contact_without_organization(api):
    payload = {
        "name": "TEST_NoOrg",
        "email": "noorg@example.com",
        "message": "TEST_ message without org",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["organization"] == ""
    assert "id" in d


def test_contact_missing_required(api):
    r = api.post(f"{BASE_URL}/api/contact", json={"name": "TEST_only"})
    assert r.status_code == 422
