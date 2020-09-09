import sys
import Adafruit_DHT
import time
import requests
import json

config_instance='https://instanceId.eu10.cp.iot.sap'
config_alternateId_4_device='18'
config_alternateId_4_sensor='16'
config_alternateId_4_capability_up01='IotApplicationCapability'

temp = 0.00
hum = 0.00

while True:
 
    time.sleep(2)

    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    data = {'humidity':humidity,'temperature':temperature}
    data = json.dumps({
  'capabilityAlternateId': 'IotApplicationCapability',
  'sensorAlternateId': '16',
  'measures': [
    {
      'temperature': temperature,
      'humidity': humidity
    }
  ]
})
    print(humidity,temperature)
   
    temperature1 = str(temperature)
    humidity1 = str(humidity)

    request_url='https://instanceId.eu10.cp.iot.sap/iot/gateway/rest/measures/18'
    headers={'Content-Type' : 'application/json'}
    response=requests.post(request_url, data=data, headers=headers,cert=('./credentials.crt', './credentials.key'), timeout=5)
    print(response.status_code)
    print(response.text)