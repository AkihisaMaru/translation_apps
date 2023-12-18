import json
import os
import base64
# from openai import OpenAI
import requests

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def handler(event, context):
    body = json.loads(json.loads(event['body']))
    
    text = body['text']
    print('text: ', text)

    headers = {
        'Authorization': f'Bearer {OPENAI_API_KEY}',
        'Content-Type': 'application/json'
    }

    data = {
        'model': 'tts-1',
        'input': text,
        'voice': 'alloy'
    }

    response = requests.post('https://api.openai.com/v1/audio/speech', headers=headers, json=data)
    encoded_content = base64.b64encode(response.content).decode('utf-8')

    print(f'response.contents: {response.content}')
    print(f'response.contents.encode: {encoded_content}')

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            "Content-Type": "application/json"
        },
        'body': json.dumps({'audioContent': encoded_content}),
        # "body": encoded_content.decode('utf-8'),
        "isBase64Encoded": True
    }