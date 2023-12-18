import json
import os
import base64
import openai

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY


def handler(event, context):
    body = json.loads(json.loads(event['body']))

    audio_file = body['audioFile']
    lang       = body['lang']

    audio_data = base64.b64decode(audio_file)

    with open('/tmp/audio_file.wav', 'wb') as f:
        f.write(audio_data)

    with open('/tmp/audio_file.wav', 'rb') as f:
        transcript = openai.Audio.transcribe(
            model='whisper-1',
            file = f,
            language = lang
        )

    print('res: ', transcript['text'])
    
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        "body": json.dumps(transcript['text'])
    }