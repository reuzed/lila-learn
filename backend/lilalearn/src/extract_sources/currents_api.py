from __future__ import annotations

import os
from datetime import datetime, timezone
import time
from typing import Any, Dict, List, Optional

import requests
from dotenv import load_dotenv



def currents_api_request(endpoint: str, params: Dict[str, Any], *, retries: int = 1, timeout: int = 20) -> Dict[str, Any]:
    url = f"https://api.currentsapi.services/v1/{endpoint}"
    attempt = 0
    last_error: Optional[str] = None
    while attempt <= retries:
        try:
            response = requests.get(url, params=params, timeout=timeout)
            response.raise_for_status()
            return response.json()
        except Exception as exc:  # pragma: no cover - network errors
            last_error = str(exc)
            if attempt == retries:
                break
            time.sleep(2 * (attempt + 1))
            attempt += 1
    return {"status": "error", "news": [], "error": last_error or "unknown error"}
