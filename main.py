import ast
import requests

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.get("/synonym")
def get_synonym():
    print(request)
    req = request.get_json()
    print(req)
    input_word = req['input']

    token = 'PhIVhJh4jlfr1KxKLu7o1jOKcHIwV5kF'
    prompt = f'Return a synonym of the given word.\n\ninput: happy\noutput: joy\n\ninput: beautiful\noutput: gorgeous\n\ninput: unlucky\noutput: unfortunate\n\ninput: {input_word}\noutput:'

    response = requests.post("https://api.ai21.com/studio/v1/j1-jumbo/complete",
                  headers={"Authorization": f'Bearer {token}'},
                  json={
                      "prompt": prompt,
                      "numResults": 1,
                      "maxTokens": 20,
                      "temperature": 0.7,
                      "topKReturn": 0,
                      "topP": 1,
                      "countPenalty": {
                          "scale": 0,
                          "applyToNumbers": False,
                          "applyToPunctuations": False,
                          "applyToStopwords": False,
                          "applyToWhitespaces": False,
                          "applyToEmojis": False
                      },
                      "frequencyPenalty": {
                          "scale": 0,
                          "applyToNumbers": False,
                          "applyToPunctuations": False,
                          "applyToStopwords": False,
                          "applyToWhitespaces": False,
                          "applyToEmojis": False
                      },
                      "presencePenalty": {
                          "scale": 0,
                          "applyToNumbers": False,
                          "applyToPunctuations": False,
                          "applyToStopwords": False,
                          "applyToWhitespaces": False,
                          "applyToEmojis": False
                      },
                      "stopSequences": ["↵"]
                  }
                  )
    res = response.json()
    syn = res['completions'][0]['data']['text'].strip()
    return jsonify({'output': syn, 'input': input_word})


def get_rhyme(word):
    x = requests.get(f'https://api.datamuse.com/words?rel_rhy={word}')
    rhyme_list = ast.literal_eval(x.text)
    print(rhyme_list)
    # {'word': 'demagogue', 'score': 2827, 'numSyllables': 3}
    top_rhyme = rhyme_list[0]
    # print(f'numSyllables={top_rhyme["numSyllables"]}')
    return top_rhyme['word']
