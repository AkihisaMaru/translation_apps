import json
import os
import base64
import openai

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY


def handler(event, context):
    body = json.loads(json.loads(event['body']))

    # audio_file = body['audioFile']
    # lang       = body['lang']

    src_lang = body['srcLang']
    dst_lang = body['dstLang']
    text     = body['text']

    print('src_lang: ', src_lang)
    print('dst_lang: ', dst_lang)
    print('text: ', text)

    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            { 
                'role': 'system', 
                'content': '{0}で入力される文章を{1}に翻訳して以下の形で出力してください'.format(
                    src_lang, dst_lang
                ) 
            },
            { 'role': 'system', 'content': '{翻訳された内容}' },
            { 'role': 'user', 'content': text }
        ]
    )

    res_text = response['choices'][0]['message']['content']
    print('res_text: ', res_text)

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        "body": json.dumps(res_text)
    }