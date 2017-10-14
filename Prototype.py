import requests
import json

url = 'https://hackgt-api.ncrcloud.com/catalog/2.0.2/items/1.0/658540dc-8dc9-42c9-97f1-b7e5d3bc6f71'
#payload = json.load(open("request.json")).decode('utf-8').replace('\0', '')
headers = {'authorization': 'AccessToken eyJhbGciOiJFUzI1NiJ9.eyJtdGgiOlsicGFzc3dvcmQiXSwic3ViIjoiYWNjdDpvcmctMUBhZG1pbiIsIm5iZiI6MTUwNzk1Mjg1Niwib3JnIjoiL29yZy0xLyIsImlzcyI6Ik5DUiIsInJscyI6ImVKeUZVMEZ5Z3pBTVBNTnIyaWNvUmlGcXdmTElJcG4wL3crcDdHQVNFeUFuc0x5NzNsbEpYNjNIMERiVW9WZlNlOXMwVjhJYml2MUFONUtucUFMS2RqWUFTaENLYUhlOWdGZjdya0g3OU9WaVpFOVdJZDliOFlJdzZPVlF5TEUvVThKR1ZEVldQRVFIRm9YQktpdzllUG9ESmZhVnJ6ZHVaZWlKQzhKWGlzWitYTVRwRkoxUStLd0h6bUhNTG44eEJicmg5c2xXRHVRcXZTbHV5ejRSU3lKVkpFZXZKR0NzUzFVN204a2krS2hTQlNVOFlPV3F3eXVIckJFRE9pM2hXaFRRUHlnL1BJbUhZUlYwVlRWWGtqUFRlOEJOUDd2emRSUFNkQUVoRE9SSzMxKzhyQ1ppVCtqVjhXN1QzOXMyUTAvcDBHRVkrRDVpWHBHQ2dFQWplT2h4Vlg5MGM1TGlhNzEySTlDUXA5OTNDWjV5TDl1M2dzNHRtWVVEV2pNY3VBc1dwRzBIaVBxTjZlN1I1TW91dWlrcWp4c29GRW5QWEptNnRqbFRhdG9mNXNETFBHZzN0dVd0eVRJQUE4NTI1RHU1c2Qzay9pRDhMTEJRaTlRQ1o4a1o3TkQvQVVxb0ZKOD0iLCJleHAiOjE1MDc5ODE2NTYsImlhdCI6MTUwNzk1Mjg1NiwianRpIjoiMmYxZGYzOWQtOGMwYS00YjIzLTkwZjctM2IyZWMxNTdiYWZhIn0.MEYCIQCal833tmyD2EH2ZrMmOnJs0tQZ06z1HUTcTANlNuTAYQIhAJksO3egVbPq3j0pEk1Lm2VELFySlcpW7LhV1RHxK9Qp', 'Cache-Control': 'no-cache', 'nep-organization': '/org-1/','nep-application-key':'8a82859f5ef21870015ef2fa5e5f0000','Content-Type': 'application/json', 'Accept':'application/json, text/plain, */*'}
r = requests.get(url, headers=headers)
#data=json.dumps(payload)
data = r.json();
print(data['longDescription']['values'][0]['value']);

url = 'https://trackapi.nutritionix.com/v2/search/instant?' + 'query=' + str(data['longDescription']['values'][0]['value'])
#payload = json.load(open("request.json")).decode('utf-8').replace('\0', '')
headers = {'x-remote-user-id': '0','x-app-id': 'e26eaa35', 'x-app-key': '39008f6f9560af6da3f40cb9ee8c5a54', 'Content-Type': 'application/json','Accept':'application/json, text/plain, */*'}
r = requests.get(url, headers=headers)
#data=json.dumps(payload)
data = r.json();
print(data['branded'][0]["nf_calories"]);
print(data['branded'][0]["serving_qty"]);
print(data['branded'][0]["photo"]["thumb"]);

